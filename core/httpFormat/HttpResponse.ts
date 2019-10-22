export default class HttpResponse {
    public body: any
    public status: number
    public internalId: string
    public message: string

    constructor(
        body: any = {},
        status: number = 200,
        internalId: string = 'DEFAULT',
        message: string = 'basic format',
    ) {
        this.body = body
        this.status = status
        this.internalId = internalId
        this.message = message
    }

    setBody(obj: any): void {
        this.body = obj
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
