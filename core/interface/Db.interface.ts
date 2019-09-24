export default interface IDb {
    get: (id: string, collectionName: string) => any

    update: (id: string, document: any, collectionName: string) => any

    list: (aggregate: any, collectionName: string) => any

    delete: (id: string, collectionName: string) => any

    create: (document: any, collectionName: string) => any

    connect: () => any

    getCli: () => IDb
}
