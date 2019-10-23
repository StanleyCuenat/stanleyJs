import HttpResponse from './HttpResponse'

export default class HttpNotFound extends HttpResponse {
    constructor(
        body = {},
        status = 404,
        internalId = 'GET',
        message = 'Resource : not found',
    ) {
        super(body, status, internalId, message)
    }
}
