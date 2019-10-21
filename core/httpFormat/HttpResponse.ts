export default class HttpResponse {
    public body: object
    public status: number
    public internalId: string
    public message: string
    constructor(
        body: object = {},
        status: number = 200,
        internalId: string = 'DEFAULT',
        message: string = 'basic format',
    ) {
        this.body = body
        this.status = status
        this.internalId = internalId
        this.message = message
    }

    setBody(body: object) {
        this.body = body
    }

    setStatus(status: number) {
        this.status = status
    }
    setInternalId(internalId: string) {
        this.internalId = internalId
    }

    setMessage(message: string) {
        this.message = message
    }

    getResponse() {
        return {
            status: this.status,
            internalId: this.internalId,
            message: this.message,
            body: this.body,
        }
    }
}
