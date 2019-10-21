import HttpResponse from './HttpResponse'

export default class HttpCreated extends HttpResponse {
    constructor(
        body: object = {},
        status: number = 201,
        internalId: string = 'POST',
        message: string = 'OK: object created',
    ) {
        super(body, status, internalId, message)
    }
}
