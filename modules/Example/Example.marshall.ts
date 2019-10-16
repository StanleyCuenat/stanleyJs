import { Marshall } from '@marshall/index'

export default class ExampleMarshall extends Marshall {
    stringTest: string
    numberTest: number
    boolTest: boolean
    constructor() {
        super()
        this.stringTest = ''
        this.numberTest = NaN
        this.boolTest = false
    }

    dtoToDomain(): boolean {
        return true
    }
}
