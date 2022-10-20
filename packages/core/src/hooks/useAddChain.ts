import { netWorkType, RequestEvent } from "../types"
export default (netWork: netWorkType) => {
    let res = null
    try {
        res = window.ethereum?.request({
            method: RequestEvent.addChain,
            params: [netWork]
        })
    } catch (e) {
        throw Error(e)
    }
    return res
}
