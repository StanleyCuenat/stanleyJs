import HttpResponse from './HttpResponse'

export default class HttpForbidden extends HttpResponse {
    constructor(
        body: object = {},
        status: number = 403,
        internalId: string = 'POST | GET | PATCH | UPDATE',
        message: string = 'Forbidden : access denied. No access right',
    ) {
        super(body, status, internalId, message)
    }
}
