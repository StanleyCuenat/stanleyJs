import * as HttpFormat from '@httpFormat/index'
export default function Json(jsonStr: string): object {
    try {
        const json = JSON.parse(jsonStr)
        return json
    } catch (e) {
        throw new HttpFormat.HttpBadRequest()
    }
}
