import JsonType from './JsonType'
export default class IsDate extends JsonType {
    constructor(value: string) {
        super(value)
    }

    set(value: Date | string) {
        if (value instanceof Date === false) {
            const tmp = new Date(value)
            if (isNaN(tmp.getTime())) {
                throw 'VALUE INVALID DATE'
            }
        }
        if (value instanceof Date && isNaN(value.getTime())) {
            throw 'VALUDE INVALID DATE'
        }
        this.value = value
    }
}
