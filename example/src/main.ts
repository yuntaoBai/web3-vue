import { createApp } from 'vue'
import App from './App.vue'
import web3Vue from '@web3-vue3/core'

const { ethereum } = <any>window

const app = createApp(App)
app.use(web3Vue, {
    provider: ethereum
})
app.mount('#app')
