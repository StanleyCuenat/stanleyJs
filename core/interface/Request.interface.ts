import http from 'http'

export default interface IRequest {
    body: string
    _req: http.IncomingMessage
    url: string | undefined
    method: string | undefined
    headers: Object

    getContentType: () => string
    setBody(): void
    getBody(): string | Object
    getHttpMethod(): string
}
