import * as JsonPatch from '@jsonPatch/index'
import * as HttpFormat from '@httpFormat/index'
export function createInstance<T>(
    fields: any,
    model: T & { [key: string]: any },
): Required<T> {
    const tmp: { [key: string]: any } = {} as T
    Object.keys(model).map(key => {
        if (model[key] instanceof JsonPatch.DataType.JsonType) {
            tmp[key] = new model[key].constructor(fields[key])
        } else {
            const deep = createInstance(fields[key], model[key])
            tmp[key] = deep
        }
    })
    return tmp as Required<T>
}

export default function create<T>(
    fields: any,
    model: T & { [key: string]: any },
): Required<T> {
    try {
        const tmp: Required<T> = createInstance<T>(fields, model)
        return tmp
    } catch (e) {
        throw new HttpFormat.HttpUnprocessableEntity(fields)
    }
}
