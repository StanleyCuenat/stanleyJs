import HttpResponse from './HttpResponse'

export default class HttpBadRequest extends HttpResponse {
    constructor(
        body: object = {},
        status: number = 400,
        internalId: string = 'POST | GET | UPDATE',
        message: string = 'Bad request: Bad request syntax',
    ) {
        super(body, status, internalId, message)
    }
}
