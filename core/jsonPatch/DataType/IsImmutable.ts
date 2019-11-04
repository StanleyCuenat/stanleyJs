import JsonType from './JsonType'
export default class IsImmutable extends JsonType {
    constructor(value: any) {
        super(value)
    }

    set(value: any) {
        throw 'VALUE IS IMMUTABLE'
    }
}
