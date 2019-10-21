import { Marshall } from '@marshall/index'

export default class ExampleMarshall extends Marshall {
    stringTest: string
    numberTest: number
    boolTest: boolean
    nested: {
        str: string
        number: number
        object: {
            substr: string
        }
    }
    constructor() {
        super()
        this.stringTest = ''
        this.numberTest = NaN
        this.boolTest = false
        this.nested = {
            str: '',
            number: 0,
            object: {
                substr: '',
            },
        }
    }

    dtoToDomain(): boolean {
        return true
    }
}
