import HttpResponse from './HttpResponse'

export default class HttpInternalError extends HttpResponse {
    constructor(
        body = {},
        status = 500,
        internalId: string = 'POST | GET | PATCH | UPDATE',
        message: string = 'Internal error: an internal error were detected',
    ) {
        super(body, status, internalId, message)
    }
}
