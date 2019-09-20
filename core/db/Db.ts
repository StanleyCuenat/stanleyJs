import * as types from '@interface/index'
export default class Db implements types.IDb {
    get = (id: string) => {
        throw 'GET NOT IMPLEMENTED'
    }

    update = (id: string, document: any) => {
        throw 'UPDATE NOT IMPLEMENTED'
    }

    list = (aggregate: any) => {
        throw 'LIST NOT IMPLEMENTED'
    }

    delete = (id: string) => {
        throw 'DELETE NOT IMPLEMENTED'
    }

    create = (document: any) => {
        throw 'get NOT IMPLEMENTED'
    }
}
