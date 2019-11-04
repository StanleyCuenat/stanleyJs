import * as HttpFormat from '@httpFormat/index'
export default class Instruction {
    public op: string
    public path: string
    public value?: any
    public from?: string
    constructor(op: string, path: string, value?: any, from?: string) {
        this.op = op
        this.path = path
        this.value = value
        this.from = from

        if (op === undefined || path === undefined) {
            throw new HttpFormat.HttpUnprocessableEntity({
                op: op,
                path: path,
                value: value || null,
                from: from || null,
            })
        }
    }
}
