import JsonType from './JsonType'
export default class IsNumber extends JsonType {
    constructor(value: number) {
        if (typeof value !== 'number') {
            throw 'BAD TYPE'
        }
        super(value)
    }

    set(value: number) {
        if (typeof value !== 'number') {
            throw 'TYPE ERROR MUST BE A NUMBER'
        }
        this.value = value
    }
}
