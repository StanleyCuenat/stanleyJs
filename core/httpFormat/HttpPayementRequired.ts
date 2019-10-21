import HttpResponse from './HttpResponse'

export default class HttpPayementRequired extends HttpResponse {
    constructor(
        body: object = {},
        status: number = 402,
        internalId: string = 'POST | GET | PATCH | DELETE | UPDATE',
        message: string = 'payment required: you must pay for this resource',
    ) {
        super(body, status, internalId, message)
    }
}
