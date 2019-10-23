import HttpResponse from './HttpResponse'

export default class HttpOk extends HttpResponse {
    constructor(
        body = {},
        status = 200,
        internalId = 'ACCEPTED',
        message = 'OK: Request accepted',
    ) {
        super(body, status, internalId, message)
    }
}
