import HttpResponse from './HttpResponse'

export default class HttpNotFound extends HttpResponse {
    constructor(
        body: object = {},
        status: number = 404,
        internalId: string = 'GET',
        message: string = 'Resource : not found',
    ) {
        super(body, status, internalId, message)
    }
}
