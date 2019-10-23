import HttpResponse from './HttpResponse'

export default class HttpUnauthorized extends HttpResponse {
    constructor(
        body = {},
        status = 401,
        internalId = 'POST | GET | UPDATE | PATCH',
        message = 'Not authorize: authentication required. Send token.',
    ) {
        super(body, status, internalId, message)
    }
}
