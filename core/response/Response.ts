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
    }

    setHttpFormat(httpFormat: HttpFormat.HttpResponse): void {
        this.httpFormat = httpFormat
    }

    addHeaders = (headers: Array<object>): void => {
        Object.keys(headers).map(key => {})
    }
    send = (): void => {
        this.res.writeHead(this.httpFormat.status, {
            'content-type': 'application/json',
        })
        this.res.write(JSON.stringify(Object.assign(this.httpFormat)))
        this.res.end()
    }
}
