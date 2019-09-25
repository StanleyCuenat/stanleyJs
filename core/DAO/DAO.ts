export default class DAO {
    // todo set db types
    private _db: any
    private _collectionName: string
    constructor(db: any, collectionName: string) {
        this._db = db
        this._collectionName = collectionName
    }

    get = (id: string) => {
        this._db.get(id, this._collectionName)
    }

    update = (id: string, document: any) => {
        this._db.update(id, document, this._collectionName)
    }

    list = (aggregate: any) => {
        this._db.aggregate(aggregate, this._collectionName)
    }

    delete = (id: string) => {
        this._db.delete(id, this._collectionName)
    }

    create = (document: any) => {
        this._db.create(document, this._collectionName)
    }
}
