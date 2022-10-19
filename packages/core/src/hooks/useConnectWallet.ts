import {connector} from "types";

export default async function(connector: connector) {
    if(!connector) {
        throw Error('error')
        return
    }
    const connectWallet = connector.activate()
    console.log(connectWallet, 99999999)
}
