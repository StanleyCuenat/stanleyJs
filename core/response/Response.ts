import http from 'http'
import * as HttpFormat from '@httpFormat/index'
import * as Interface from '@interface/index'
export default class Response implements Interface.IResponse {
    private res: http.ServerResponse
    public headers: any
    public httpFormat: HttpFormat.HttpResponse
    constructor(_res: http.ServerResponse) {
        this.res = _res
        this.httpFormat = new HttpFormat.HttpResponse()
        this.headers = {}
    }

    setHttpFormat(httpFormat: HttpFormat.HttpResponse): void {
        this.httpFormat = httpFormat
    }

    addHeaders = (headers: Array<object>): void => {
        Object.keys(headers).map(key => {})
    }

    setContentType = () => {
        switch (typeof this.httpFormat.body) {
            case 'string':
                this.headers['content-type'] = 'application/plain'
            case 'object':
                this.headers['content-type'] = 'application/json'
            default:
                this.headers['content-type'] = 'application/json'
        }
    }

    send = (): void => {
        this.setContentType()
        this.res.writeHead(this.httpFormat.status, this.headers)
        if (this.headers['content-type'] !== 'application/json') {
            this.res.write(JSON.stringify(Object.assign(this.httpFormat.body)))
        } else {
            this.res.write(JSON.stringify(Object.assign(this.httpFormat)))
        }

        this.res.end()
        this.res.on('error', error => {
            console.log(error)
        })
    }

    isClose = () => {
        return this.res.finished
    }
}
