import HttpResponse from './HttpResponse'

export default class HttpPayementRequired extends HttpResponse {
    constructor(
        body = {},
        status = 402,
        internalId = 'POST | GET | PATCH | DELETE | UPDATE',
        message = 'payment required: you must pay for this resource',
    ) {
        super(body, status, internalId, message)
    }
}
