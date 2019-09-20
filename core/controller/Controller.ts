import http from 'http'
import * as type from '@interface/index'
export default class Controller {
    public _router: Array<type.IRoute>
    constructor() {
        this._router = []
    }

    /**
     * @param  {string} uri
     * @param  {type.ICallback[]} ...cbs
     */
    post = (uri: string, ...cbs: type.ICallback[]) => {
        this._router.push({ method: 'post', uri: uri, cbs: cbs })
    }
    /**
     * @param  {string} uri
     * @param  {type.ICallback[]} ...cbs
     */
    get = (uri: string, ...cbs: type.ICallback[]) => {
        this._router.push({ method: 'post', uri: uri, cbs: cbs })
    }

    /**
     * @param  {string} uri
     * @param  {type.ICallback[]} ...cbs
     */
    update = (uri: string, ...cbs: type.ICallback[]) => {
        this._router.push({ method: 'post', uri: uri, cbs: cbs })
    }

    /**
     * @param  {string} uri
     * @param  {type.ICallback[]} ...cbs
     */
    delete = (uri: string, ...cbs: type.ICallback[]) => {
        this._router.push({ method: 'post', uri: uri, cbs: cbs })
    }

    /**
     * @param  {string} uri
     * @param  {type.ICallback[]} ...cbs
     */
    patch = (uri: string, ...cbs: type.ICallback[]) => {
        this._router.push({ method: 'post', uri: uri, cbs: cbs })
    }

    /**
     * @param  {string} uri
     * @param  {type.ICallback[]} ...cbs
     */
    set = (method: string, uri: string, ...cbs: type.ICallback[]) => {
        this._router.push({ method: method, uri: uri, cbs: cbs })
    }

    setRouter = (): void => {
        throw 'setRouter must be implemented...'
    }

    getRouter = (): Array<type.IRoute> => {
        return this._router
    }
}
