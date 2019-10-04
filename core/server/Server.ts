import * as http from 'http'
import * as https from 'https'
import * as fs from 'fs'
import path from 'path'
import * as type from '@interface/index'
import Controller from '@controller/Controller'
import Request from '@request/Request'
import Response from '@response/Response'
import DAO from '@DAO/DAO'

/**
 * SERVER.TS
 * Core server for the StanleyJS framework.
 * load config files, bind and listen desired port number.
 *
 */

export default class Server {
    private _internalServer: http.Server
    private _ctrlList: Array<{ name: string; ctrl: Controller }>
    private _modelList: Array<{ name: string; model: DAO }>
    constructor() {
        this.loadModuleFolder()
        this._internalServer = this.loadServer()
        this._ctrlList = []
        this._modelList = []
    }

    launchRoute = async (
        req: type.IRequest,
        res: type.IResponse,
        route: type.IRoute,
    ): Promise<any> => {
        let idx = 0
        for (idx = 0; idx < route.cbs.length; idx++) {
            try {
                await route.cbs[idx](req, res)
            } catch (e) {
                return e
            }
        }
        return
    }

    parseRequest = (req: type.IRequest, res: type.IResponse): void => {
        this._ctrlList.forEach(ctrl => {
            ctrl.ctrl.getRouter().forEach(route => {
                let uri: string = route.uri as string
                const regex = new RegExp(':([a-z-A-Z-0-9]{1,})')
                while (uri.search(regex) !== -1) {
                    uri = uri.replace(regex, '([a-z-A-Z-0-9]{1,})')
                }
                if (
                    req.url !== undefined &&
                    req.url.match(new RegExp(uri)) &&
                    req.method !== undefined &&
                    route.method.toUpperCase() === req.method.toUpperCase()
                ) {
                    this.launchRoute(req, res, route)
                        .then(() => {})
                        .catch(e => {
                            return e
                        })
                }
            })
        })
    }

    /**
     * @returns http
     */
    loadServer = (): http.Server | https.Server => {
        return http.createServer(
            (_req: http.IncomingMessage, _res: http.ServerResponse) => {
                const req = new Request(_req, this)
                const res = new Response(_res)
                this.parseRequest(req, res)
            },
        )
    }

    startServer = (): void => {
        this._internalServer.listen(process.env.SERVER_PORT, () => {
            console.info(
                `Server started, listen on port ${process.env.SERVER_PORT}`,
            )
        })
    }

    loadModule = (rootPath: string, file: fs.Dirent): void => {
        fs.readdir(rootPath + file.name, {}, (err, files) => {
            if (err) {
                throw err
            }
            const module = require(rootPath + file.name + '/index.ts')
            const controller: Controller = new module.Controller()
            const model: DAO = new module.Model()
            this._ctrlList.push({
                name: controller.constructor.name,
                ctrl: controller,
            })
            this._modelList.push({ name: model.constructor.name, model: model })
        })
    }

    loadModuleFolder = (): void => {
        const rootPath = path.resolve('.') + '/modules/'
        fs.readdir(rootPath, { withFileTypes: true }, (err, files) => {
            if (err) {
                throw err
            }
            files.forEach(file => {
                if (file.isDirectory()) {
                    this.loadModule(rootPath, file)
                }
            })
        })
    }
}
