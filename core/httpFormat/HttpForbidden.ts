import HttpResponse from './HttpResponse'

export default class HttpForbidden extends HttpResponse {
    constructor(
        body = {},
        status = 403,
        internalId = 'POST | GET | PATCH | UPDATE',
        message = 'Forbidden : access denied. No access right',
    ) {
        super(body, status, internalId, message)
    }
}
