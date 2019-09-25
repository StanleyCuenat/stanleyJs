import * as type from './index'

export default interface callback {
    (req: type.IRequest, res: type.IResponse, next?: callback): Promise<any>
}
