<template>
  <div id="app">
    <button @click="connectWallet">Connect wallet</button>
    <p>{{state.account}}</p>
    <button @click="connectContract">Contract</button>
    <p>--------</p>
    <button @click="switchChain">Switch Chain</button>
    <p>--------</p>
    <button @click="addChain">Add Chain</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, inject } from 'vue';
import {useConnectWallet, useContract, useSwitchChain, useAddChain, useTransactionReceipt} from '@web3-vue3/core'
import { InjectedConnector } from '@web3-vue3/injected-connector'
import { abi } from "./abi/erc20";

export default defineComponent({
  name: 'App',
  setup() {
    const state = reactive({
      account: '',
      provider: {}
    })
    const connector = new InjectedConnector({supportedChainIds: [1, 4, 56]})
    connector.on('web3Update', (res) => {
      console.log('account changed', res)
    })
    const connectWallet = () => {
      const { account, provider } = useConnectWallet(connector)
      state.account = account
      state.provider = provider
    }

    const connectContract = () => {
      const contract = useContract(abi, '0xD1f9056757a8B9fCA4b8095b62C4A47F57c2Ce63', {
        method: 'totalSupply'
      })
      contract.call().then((res: object) => {
        const util = inject('web3utils')
        const amount = (util as any).fromWei(res, 'ether')
        console.log(amount)
        // useTransactionReceipt(res.transactionHash).then((result: object) => {
        //   if (result.status) {
        //     console.log(result)
        //   }
        // })
      })
    }

    const switchChain = () => {
      useSwitchChain({
        chainId: `0x61`
      })
    }

    const addChain = () => {
      useAddChain({
        chainId: `0x61`,
        chainName: 'BSC-TEST',
        nativeCurrency: {
          name: 'BNB',
          symbol: 'BNB',
          decimals: 18
        },
        rpcUrls: ["https://data-seed-prebsc-1-s3.binance.org:8545"],
        blockExplorerUrls: ['https://testnet.bscscan.com']
      })
    }
    return {
      state,
      connectWallet,
      connectContract,
      switchChain,
      addChain
    }
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
