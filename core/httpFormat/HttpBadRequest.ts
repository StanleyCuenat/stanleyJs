import HttpResponse from './HttpResponse'

export default class HttpBadRequest extends HttpResponse {
    constructor(
        body = {},
        status = 400,
        internalId = 'POST | GET | UPDATE',
        message = 'Bad request: Bad request syntax',
    ) {
        super(body, status, internalId, message)
    }
}
