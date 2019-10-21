import HttpResponse from './HttpResponse'

export default class HttpOk extends HttpResponse {
    constructor(
        body: object = {},
        status: number = 200,
        internalId: string = 'ACCEPTED',
        message: string = 'OK: Request accepted',
    ) {
        super(body, status, internalId, message)
    }
}
