import http from 'http'

export default interface IResponse {
    content: string | Object
    statusCode: number
    headers: Object
    setContent(content: String | Object): void
    addHeaders(headers: Array<object>): void
    status(headers: number): void
    send(): void
}
