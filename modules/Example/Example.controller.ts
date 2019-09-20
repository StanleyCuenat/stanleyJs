import Controller from '@controller/Controller'
import * as type from '@interface/index'

export default class ExampleCtrl extends Controller {
    constructor() {
        super()
    }

    test = (req: type.IRequest, res: type.IResponse) => {
        console.log(req)
        console.log(res)
    }

    setRouter = () => {
        this.get('/test', this.test)
    }
}
