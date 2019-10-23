import HttpResponse from './HttpResponse'

export default class HttpMethodNotAllowed extends HttpResponse {
    constructor(
        body = {},
        status = 405,
        internalId = 'POST | GET | PATCH | UPDATE',
        message = 'Method not allowed: bad http method or this http method is not allowed',
    ) {
        super(body, status, internalId, message)
    }
}
