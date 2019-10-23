import HttpResponse from './HttpResponse'

export default class HttpCreated extends HttpResponse {
    constructor(
        body = {},
        status = 201,
        internalId = 'POST',
        message = 'OK: object created',
    ) {
        super(body, status, internalId, message)
    }
}
