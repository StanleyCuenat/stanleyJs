import HttpResponse from './HttpResponse'

export default class HttpMethodNotAllowed extends HttpResponse {
    constructor(
        body: object = {},
        status: number = 405,
        internalId: string = 'POST | GET | PATCH | UPDATE',
        message: string = 'Method not allowed: bad http method or this http method is not allowed',
    ) {
        super(body, status, internalId, message)
    }
}
