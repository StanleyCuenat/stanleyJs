import HttpResponse from './HttpResponse'

export default class HttpUnprocessableEntity extends HttpResponse {
    constructor(
        body: object = {},
        status: number = 422,
        internalId: string = 'POST | PATCH | UPDATE',
        message: string = "Unprocessable Entity: entity incorrect or don't respect the type",
    ) {
        super(body, status, internalId, message)
    }
}
