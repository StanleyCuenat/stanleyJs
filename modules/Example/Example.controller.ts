import Controller from '@controller/Controller'
import * as type from '@interface/index'

export default class ExampleCtrl extends Controller {
    constructor() {
        super()
        this.setRouter()
    }

    test = async (req: type.IRequest, res: type.IResponse): Promise<any> => {
        console.log('second access')
    }

    before = async (req: type.IRequest, res: type.IResponse) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {}, 5000)
        })
    }

    setRouter = () => {
        this.get('/test/:id/lib/:libId', this.before, this.test)
    }
}
