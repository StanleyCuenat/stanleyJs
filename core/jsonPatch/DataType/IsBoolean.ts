import JsonType from './JsonType'
export default class IsBoolean extends JsonType {
    constructor(value: boolean) {
        if (typeof value !== 'boolean') {
            throw 'BAD TYPE'
        }
        super(value)
    }
    set(value: boolean) {
        if (typeof value !== 'boolean') {
            throw 'TYPE ERROR MUST BE A BOOLEAN'
        }
        this.value = value
    }
}
