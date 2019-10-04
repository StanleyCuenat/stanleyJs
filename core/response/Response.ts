import http from 'http'
import * as Interface from '@interface/index'
export default class Response implements Interface.IResponse {
    private res: http.ServerResponse
    public statusCode: number
    public headers: any
    public content: string | object
    constructor(_res: http.ServerResponse) {
        this.statusCode = 200
        this.headers = {}
        this.content = {}
        this.res = _res
    }

    setContent = (content: string | Object): void => {
        this.content = content
    }

    addHeaders = (headers: Array<object>): void => {
        Object.keys(headers).map(key => {})
    }
    status = (nb: number): void => {
        this.statusCode = nb
    }

    send = (): void => {
        if (typeof this.content === 'object') {
            this.headers['content-type'] = 'application/json'
            this.content = JSON.stringify(this.content)
        }
        this.res.writeHead(this.statusCode, this.headers)
        this.res.write(this.content)
        this.res.end()
    }
}
