import {connector} from "types";

export default async function(connector: connector) {
    if(!connector) {
        throw Error('error')
        return
    }
    const connectWallet = await connector.activate()
    console.log(connectWallet, 99999999)
    return {
        account: connectWallet.account,
        provider: connectWallet.provider
    }
}
