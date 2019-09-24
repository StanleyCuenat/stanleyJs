import * as types from '@interface/index'
export default class Db implements types.IDb {
    public _cli: any
    constructor() {
        this._cli = null
    }

    get = (id: string, collectionName: string) => {
        throw 'GET NOT IMPLEMENTED'
    }

    update = (id: string, document: any, collectionName: string) => {
        throw 'UPDATE NOT IMPLEMENTED'
    }

    list = (aggregate: any, collectionName: string) => {
        throw 'LIST NOT IMPLEMENTED'
    }

    delete = (id: string, collectionName: string) => {
        throw 'DELETE NOT IMPLEMENTED'
    }

    create = (document: any, collectionName: string) => {
        throw 'CREATE NOT IMPLEMENTED'
    }

    connect = () => {
        throw 'CONNECT NOT IMPLEMENTED'
    }

    getCli = () => {
        return this._cli
    }
}
