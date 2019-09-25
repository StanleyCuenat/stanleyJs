import Controller from '@controller/Controller'
import * as type from '@interface/index'

export default class ExampleCtrl extends Controller {
    constructor() {
        super()
        this.setRouter()
    }

    test = async (req: type.IRequest, res: type.IResponse): Promise<any> => {
        console.log(req)
        console.log(res)
    }

    setRouter = () => {
        this.get('/test/:id/lib/:libId', this.test)
    }
}
