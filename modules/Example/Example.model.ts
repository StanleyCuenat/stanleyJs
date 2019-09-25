import DAO from '@DAO/DAO'

export default class ExampleModel extends DAO {
    constructor(db: any) {
        super(db, 'example')
    }
}
