import Web3 from 'web3'

export default class VueWeb3 extends Web3 {
    static install: (_Vue, options?: { provider: null }) => void;
    static useWallet: () => void;
    constructor() {
        super();
    }
}

VueWeb3.install = (_Vue, options = { provider: null })=> {

}
