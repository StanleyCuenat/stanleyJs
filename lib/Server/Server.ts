import http from 'http'
import https from 'https'

/**
 * SERVER.TS
 * Core server for the StanleyJS framework.
 * load config files, bind and listen desired port number.
 * *** TODO ***
 * - create controller class
 *
 */

export default class Server {
    private _configFile: any
    private _internalServer: http.Server
    constructor() {
        this._configFile = this.loadConfigFile()
        this._internalServer = this.loadServer()
        this.startServer()
    }
    /**
     * @returns NodeRequire
     */
    loadConfigFile = (): NodeRequire => {
        const configPath: string =
            process.env.SERVER_CONFIG_PATH || './defaultConfig.ts'
        return require(configPath)
    }
    /**
     * @returns http
     */
    loadServer = (): http.Server | https.Server => {
        if (this._configFile.HTTPS === true) {
            return https.createServer()
        } else {
            return http.createServer()
        }
    }

    startServer = () => {
        this._internalServer.listen(this._configFile.SERVER_PORT, () => {
            console.info(
                `Server started, listen on port ${this._configFile.SERVER_PORT}`,
            )
        })
    }
}
