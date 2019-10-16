export default class Marshall {
    [key: string]: any
    constructor() {
        return this
    }

    dtoToDomain(): boolean {
        throw 'MARSHALL: dtoTODomain MUST BE IMPLEMENTED'
    }
}
