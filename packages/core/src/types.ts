// import { AbstractConnector } from '@web3-vue3/abstract-connector';
import { ConnectorUpdate } from "@web3-vue3/types";
// export interface Web3ReactManagerFunctions {
//     activate: (connector: AbstractConnector, onError?: (error: Error) => void, throwErrors?: boolean) => Promise<void>;
//     setError: (error: Error) => void;
//     deactivate: () => void;
// }
// export interface Web3VueManagerReturn extends Web3ReactManagerFunctions {
//     connector?: AbstractConnector;
//     provider?: any;
//     chainId?: number;
//     account?: null | string;
//     error?: Error;
// }
// export interface Web3VueContextInterface<T = any> extends Web3ReactManagerFunctions {
//     connector?: AbstractConnector;
//     library?: T;
//     chainId?: number;
//     account?: null | string;
//     active: boolean;
//     error?: Error;
// }

export type connector = {
    activate(): Promise<ConnectorUpdate>
    getProvider(): Promise<any>
    getChainId(): Promise<number | string>
    getAccount(): Promise<null | string>
    deactivate(): void
}

export type web3Object = {
    eth: object,
    shh?: object,
    bzz?: object,
    utils: object,
    version: string
}
