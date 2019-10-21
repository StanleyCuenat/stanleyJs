import http from 'http'
import * as HttpFormat from '@httpFormat/index'
export default interface IResponse {
    headers: Object
    httpFormat: HttpFormat.HttpResponse
    setHttpFormat(httpFormat: HttpFormat.HttpResponse): void
    addHeaders(headers: Array<object>): void
    send(): void
}
