export default class JsonType {
    value: any

    constructor(value: any) {
        this.value = value
    }

    set(value: any) {
        throw 'SET MUST BE IMPLEMENTED'
    }
}
