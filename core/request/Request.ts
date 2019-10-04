import http from 'http'
import * as Interface from '@interface/index'
import Server from '@server/Server'
export default class Request implements Interface.IRequest {
    public body: string
    public _req: http.IncomingMessage
    public url: string | undefined
    public method: string | undefined
    public headers: any
    public statusCode: number | undefined
    private server: Server
    constructor(req: http.IncomingMessage, _srv: Server) {
        this.body = ''
        this.url = req.url
        this.method = req.method
        this.headers = req.headers
        this.statusCode = req.statusCode
        this._req = req
        this.server = _srv
    }
    /**
     * @returns string
     */
    getContentType = (): string => {
        if (this.headers['content-type']) {
            return this.headers['content-type']
        }
        throw 'CONTENT TYPE NOT FOUND'
    }
    /**
     */
    setBody = (): void => {
        this._req.on('readable', () => {
            this.body += this._req.read()
        })
        this._req.on('end', () => {
            if (this.getContentType().toLowerCase() === 'application/json') {
                this.body = JSON.parse(this.body)
            }
        })
    }
    /**
     * @returns string
     */
    getBody = (): string | Object => {
        return this.body
    }

    /**
     * @returns string
     */
    getHttpMethod = (): string => {
        if (this.method) {
            return this.method
        }
        throw 'METHOD NOT FOUND'
    }
}
