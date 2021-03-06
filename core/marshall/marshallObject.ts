import * as Interface from '@interface/index'
import * as HttpFormat from '@httpFormat/index'
import Marshall from './Marshall'

function checkType(toCheck: any, src: any) {
    return (
        toCheck !== undefined &&
        src !== undefined &&
        typeof toCheck === typeof src
    )
}

function addValue(result: any, src: any) {
    if (!checkType(result, src)) {
        throw 'MARSHALL ERROR BAD TYPE'
    }
    if (typeof result === 'object') {
        nestedObjectCopy(result, src)
        return result
    }
    return src
}
function nestedObjectCopy(result: any, src: any) {
    Object.keys(result).map(key => {
        result[key] = addValue(result[key], src[key])
    })
}
export default async function marshallObject(
    signature: Interface.MarshallConstructable,
    object: any,
): Promise<Marshall> {
    try {
        let marshall: Marshall = new signature()
        nestedObjectCopy(marshall, object)
        return marshall
    } catch (e) {
        throw new HttpFormat.HttpUnprocessableEntity(object)
    }
}
