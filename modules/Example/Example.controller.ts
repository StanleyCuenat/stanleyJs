import Controller from '@controller/Controller'
import * as type from '@interface/index'
import * as Marshall from '@marshall/index'
import * as Example from './index'
import * as HttpFormat from '@httpFormat/index'
export default class ExampleCtrl extends Controller {
    constructor() {
        super()
        this.setRouter()
    }

    test = async (req: type.IRequest, res: type.IResponse): Promise<any> => {
        try {
            const result = await Marshall.marshallObject(
                Example.Marshall,
                req.getBody(),
            )
            return res.setHttpFormat(new HttpFormat.HttpOk(result, 200))
        } catch (e) {
            throw e
        }
    }

    before = async (req: type.IRequest, res: type.IResponse) => {}

    setRouter = () => {
        this.post('/test/:id/lib/:libId', this.before, this.test)
    }
}
