import * as http from 'http'
import * as https from 'https'
import * as fs from 'fs'
import path from 'path'
import * as type from '@interface/index'
import Controller from '@controller/Controller'
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

    parseRequest = (req: type.IRequest, res: type.IResponse) => {}

    /**
     * @returns http
     */
    loadServer = (): http.Server | https.Server => {
        return http.createServer((req: type.IRequest, res: type.IResponse) => {
            console.log(req)
            this.parseRequest(req, res)
        })
    }

    startServer = () => {
        this._internalServer.listen(process.env.SERVER_PORT, () => {
            console.info(
                `Server started, listen on port ${process.env.SERVER_PORT}`,
            )
        })
    }

    loadModule = (rootPath: string, file: fs.Dirent) => {
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

    loadModuleFolder = () => {
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
