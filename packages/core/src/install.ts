import Web3 from 'web3'
import { provider } from 'web3-core'
import store from './store'
import { web3Object } from './types'

export default function (app:any, options?: { provider: provider }) {
    const providerOptions = options && options.provider ? options.provider : window.ethereum
    const web3: web3Object = new (Web3 as any)(<any>providerOptions)
    console.log(web3)
    store.web3 = web3
    app.config.globalProperties.$web3Utils = web3.utils
    console.log(options)
}
