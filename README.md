# `web3-vue3` 

_A simple framework for building modern [Ethereum dApps](https://ethereum.org/beginners/)_

## Installation

``` bash
 npm install vue @web3-vue3/core
```
  main.js
``` js
 import vueWeb3 from "@web3-vue3/core"
 const app = createApp(App)
 app.use(web3Vue, {
    provider: window.ethereum
 })
```

Connect Wallet
``` js
<button @click="connectWallet">Connect wallet</button>
<p>{{state.account}}</p>

 import { useConnectWallet } from "@web3-vue3/core"
 import { InjectedConnector } from '@web3-vue3/injected-connector'
 setup() {
   const state = reactive({
     account: '',
     provider: {}
   })
   const connectWallet = () => {
      const connector = new InjectedConnector({supportedChainIds: [1, 4, 56]})
      const { account, provider } = useConnectWallet(connector)
      state.account = account
      state.provider = provider
    }
     return {
       state,
       connectContract
     }
   }
```

Contract
``` js
<button @click="connectContract">Connect Contract</button>

 import { useContract } from "@web3-vue3/core"
 setup() {
    const connectContract = () => {
      //const contract = useContract(abi, '0xD1f9056757a8B9fCA4b8095b62C4A47F57c2Ce63')
      //contract.totalSupply().call().then(res => {console.log(res)})
      const contract = useContract(abi, '0xD1f9056757a8B9fCA4b8095b62C4A47F57c2Ce63', {
        method: 'totalSupply'
      })
      contract.call().then(res => {
        console.log(res)
      })
    }
     return {
       connectContract
     }
   }
```

Utils
``` js
 import { inject } from "vue"
 setup() {
    const util = inject('web3utils');
    const amount = util.fromWei('2000000000000000000', 'ether')  
 }
```

## Local Development

- Clone repo\
  `git clone https://github.com/yuntaoBai/web3-vue.git`

- Install top-level dependencies\
  `yarn`

- Install sub-dependencies\
  `yarn bootstrap`

- Build and watch for changes\
  `yarn start`
