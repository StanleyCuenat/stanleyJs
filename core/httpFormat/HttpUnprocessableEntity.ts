import HttpResponse from './HttpResponse'

export default class HttpUnprocessableEntity extends HttpResponse {
    constructor(
        body = {},
        status = 422,
        internalId = 'POST | PATCH | UPDATE',
        message = "Unprocessable Entity: entity incorrect or don't respect the type",
    ) {
        super(body, status, internalId, message)
    }
}
