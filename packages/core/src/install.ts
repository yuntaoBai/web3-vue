import Web3 from 'web3'
import { provider } from 'web3-core'
import store from './store'

export default function (app:any, options?: { provider: provider }) {
    const providerOptions = options && options.provider ? options.provider : window.ethereum
    const web3 = new Web3(<any>providerOptions)
    store.web3 = web3
    app.config.globalProperties.$web3Utils = web3.utils
    console.log(options)
}
