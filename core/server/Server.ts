import * as http from 'http'
import * as https from 'https'
import * as fs from 'fs'
import path from 'path'
import * as type from '@interface/index'
import Controller from '@controller/Controller'
import * as Interface from '@interface/index'
import Request from '@request/Request'
import Response from '@response/Response'
import * as HttpFormat from '@httpFormat/index'
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
    private _databaseTypeList: Array<{ name: string; type: any }>
    private _middlewareList: Array<Interface.ICallback>
    constructor() {
        this._internalServer = this.loadServer()
        this._ctrlList = []
        this._modelList = []
        this._databaseTypeList = []
        this._middlewareList = []
        this.loadModuleFolder()
    }

    addGlobalMiddleware = (middleware: Interface.ICallback): void => {
        this._middlewareList.push(middleware)
    }

    getGlobalMiddleware = (): Array<Interface.ICallback> => {
        return this._middlewareList
    }
    launchRoute = async (
        req: type.IRequest,
        res: type.IResponse,
        route: type.IRoute,
    ): Promise<any> => {
        let idx = 0
        if (route.method !== 'GET') {
            req.setBody()
        }
        try {
            for (idx = 0; idx < route.cbs.length; idx++) {
                await route.cbs[idx](req, res)
            }
        } catch (e) {
            if (e instanceof HttpFormat.HttpResponse) {
                res.setHttpFormat(e)
            } else {
                res.setHttpFormat(new HttpFormat.HttpInternalError())
            }
        }
    }
    /**
     * @param  {type.IRequest} req
     * @param  {type.IResponse} res
     * @returns void
     * Basic Parser for router. Can be improve for sure.
     */
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
                    this.launchRoute(req, res, route).then(() => {
                        return res.send()
                    })
                } else {
                    res.setHttpFormat(new HttpFormat.HttpNotFound())
                    res.send()
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
