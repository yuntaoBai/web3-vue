import Web3 from 'web3'
import { provider } from 'web3-core'
import store from './store'

export default function (vue:any, options: {provider: provider}) {
    const { ethereum } = <any>window
    const web3 = new Web3(options.provider || ethereum)
    store.web3 = web3
    vue.config.globalProperties.$web3Utils = web3.utils
    console.log(options)
}
