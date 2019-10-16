import * as Interface from '@interface/index'
import Marshall from './Marshall'
export default async function marshallObject(
    signature: Interface.MarshallConstructable,
    object: any,
): Promise<Marshall> {
    const marshall: Marshall = new signature()
    Object.keys(object).map(key => {
        if (
            marshall[key] !== undefined &&
            typeof marshall[key] === typeof object[key]
        ) {
            marshall[key] === object[key]
        } else {
            throw 'MARSHALL: INPUT INCORRECT BAD TYPE OR FORMAT'
        }
    })
    return marshall
}
