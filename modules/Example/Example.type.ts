import * as Interface from '@interface/index'

export interface IExampleType extends Interface.IDatabaseType {
    id: string
    example: string
}

export function isExampleType(input: any): boolean {
    return typeof input.id === 'string' && typeof input.example === 'string'
}

export function ExampleType(input: any): Interface.IDatabaseType {
    if (!isExampleType(input)) {
        throw 'ERROR MARSHALLIZE TYPE'
    }
    const newExampleType: IExampleType = Object.assign({}, input)
    return newExampleType
}
