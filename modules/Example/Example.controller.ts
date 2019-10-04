import Controller from '@controller/Controller'
import * as type from '@interface/index'

export default class ExampleCtrl extends Controller {
    constructor() {
        super()
        this.setRouter()
    }

    test = async (req: type.IRequest, res: type.IResponse): Promise<any> => {
        console.log('second access')
        res.setContent({ status: 'ok' })
        res.status(200)
        res.send()
    }

    before = async (req: type.IRequest, res: type.IResponse) => {
        console.log('before')
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                return resolve()
            }, 500)
        })
    }

    setRouter = () => {
        this.get('/test/:id/lib/:libId', this.before, this.test)
    }
}
