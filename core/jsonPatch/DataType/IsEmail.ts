import JsonType from './JsonType'
export default class IsEmail extends JsonType {
    constructor(value: string) {
        if (typeof value !== 'string') {
            throw 'BAD TYPE'
        }
        super(value)
    }

    set(value: string) {
        const regex = new RegExp(
            '/^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/',
        )
        if (typeof value !== 'string') {
            throw 'VALUE MUST BE A STRING'
        }
        if (!regex.test(String(value).toLowerCase())) {
            throw 'VALUE MUST BE A VALID EMAIL'
        }
    }
}
