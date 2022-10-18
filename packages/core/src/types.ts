import { AbstractConnector } from '@web3-vue3/abstract-connector';
export interface Web3ReactManagerFunctions {
    activate: (connector: AbstractConnector, onError?: (error: Error) => void, throwErrors?: boolean) => Promise<void>;
    setError: (error: Error) => void;
    deactivate: () => void;
}
export interface Web3VueManagerReturn extends Web3ReactManagerFunctions {
    connector?: AbstractConnector;
    provider?: any;
    chainId?: number;
    account?: null | string;
    error?: Error;
}
export interface Web3VueContextInterface<T = any> extends Web3ReactManagerFunctions {
    connector?: AbstractConnector;
    library?: T;
    chainId?: number;
    account?: null | string;
    active: boolean;
    error?: Error;
}
