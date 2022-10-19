import { ConnectorUpdate } from "@web3-vue3/types";
import { provider } from 'web3-core'

export type connector = {
    activate(): Promise<ConnectorUpdate>
    getProvider(): Promise<any>
    getChainId(): Promise<number | string>
    getAccount(): Promise<null | string>
    deactivate(): void
}

export type web3Object = {
    eth: {
        Contract (abi: [], address: string, options?: {}): object
    },
    shh?: object,
    bzz?: object,
    utils: object,
    version: string
}

export type Store = {
    web3: web3Object
    provider?: provider
    currentConnector?: connector
}
