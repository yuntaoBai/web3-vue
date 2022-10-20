import { ConnectorUpdate } from "@web3-vue3/types";
import { provider } from 'web3-core'
import { Ens } from "web3-eth-ens";
import { BlockTransactionString, FeeHistoryResult, Syncing } from "web3-eth";

export type connector = {
    activate(): Promise<ConnectorUpdate>
    getProvider(): Promise<any>
    getChainId(): Promise<number | string>
    getAccount(): Promise<null | string>
    deactivate(): void
}

export type web3Object = {
    eth: {
        Contract (abi: object, address: string, options?: {}): object
        accounts?: any
        ens?: Ens
        abi?: any
        net?: any
        givenProvider?: any
        defaultAccount?: string | null
        defaultBlock?: any
        defaultCommon?: any
        defaultHardfork?: any
        defaultChain?: any
        transactionPollingTimeout?: number
        transactionConfirmationBlocks?: number
        transactionBlockTimeout?: number
        handleRevert?: boolean
        readonly currentProvider?: any
        setProvider(provider: provider): boolean
        BatchRequest?: new () => any
        getProtocolVersion?(callback?: (error: Error, protocolVersion: string) => void): Promise<string>
        isSyncing?(callback?: (error: Error, syncing: Syncing) => void): Promise<Syncing | boolean>
        getCoinbase?(callback?: (error: Error, coinbaseAddress: string) => void): Promise<string>
        isMining?(callback?: (error: Error, mining: boolean) => void): Promise<boolean>
        getHashrate?(callback?: (error: Error, hashes: number) => void): Promise<number>
        getNodeInfo?(callback?: (error: Error, version: string) => void): Promise<string>
        getChainId?(callback?: (error: Error, version: number) => void): Promise<number>
        getGasPrice(callback?: (error: Error, gasPrice: string) => void): Promise<string>
        getFeeHistory?(blockCount: any, lastBlock: any, rewardPercentiles: number[], allback?: (error: Error, feeHistory: FeeHistoryResult) => void): Promise<FeeHistoryResult>
        getAccounts(callback?: (error: Error, accounts: string[]) => void): Promise<string[]>
        getBlockNumber(callback?: (error: Error, blockNumber: number) => void): Promise<number>
        getBalance(address: string): Promise<string>
        getStorageAt(address: string, position: any): Promise<string>
        getCode(address: string): Promise<string>
        getBlock(blockHashOrBlockNumber: any): Promise<BlockTransactionString>

    },
    shh: object
    bzz: object
    utils: object
    version: string
}

export type Store = {
    web3?: web3Object
    provider?: provider
    currentConnector?: connector
}

export type netWorkType = {
    chainId: string | number
    chainName: string
    nativeCurrency?: {
        name: string
        symbol: string
        decimals: number
    },
    rpcUrls: string[]
    blockExplorerUrls?: string[]
}
