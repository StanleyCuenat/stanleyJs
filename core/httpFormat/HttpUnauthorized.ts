import HttpResponse from './HttpResponse'

export default class HttpUnauthorized extends HttpResponse {
    constructor(
        body: object = {},
        status: number = 401,
        internalId: string = 'POST | GET | UPDATE | PATCH',
        message: string = 'Not authorize: authentication required. Send token.',
    ) {
        super(body, status, internalId, message)
    }
}
