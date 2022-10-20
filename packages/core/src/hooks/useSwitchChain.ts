import { netWorkType } from "../types"
export default (netWork: netWorkType) => {
    let res = null
    try {
        res = window.ethereum?.request({
            method: 'wallet_switchEthereumChain',
            params: [netWork]
        })
    } catch (e) {
        throw Error(e)
    }
    return res
}
