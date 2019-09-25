import ICallback from './Callback.interface'

export default interface Route {
    method: String
    uri: String
    cbs: ICallback[]
}
