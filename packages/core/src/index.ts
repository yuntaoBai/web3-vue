import Web3 from 'web3'
import { provider } from 'web3-core'
import { connector } from './types'
import store from './sore'
import install from "install";
import useConnectWallet from './hooks/useConnectWallet'

export default class VueWeb3 extends Web3 {
    static install: (app: object, options?: object) => void;
    static useConnectWallet: (connector: connector) => void;
    constructor(provider: provider) {
        // @ts-ignore
        super(provider);
        store.web3 = this
    }
}

VueWeb3.install = install

VueWeb3.useConnectWallet = useConnectWallet
