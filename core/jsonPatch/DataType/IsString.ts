import JsonType from './JsonType'
export default class IsString extends JsonType {
    constructor(value: string) {
        if (typeof value !== 'string') {
            throw 'BAD TYPE'
        }
        super(value)
    }

    set(value: string) {
        if (typeof value !== 'string') {
            throw 'TYPE ERROR MUST BE A STRING'
        }
        this.value = value
    }
}
