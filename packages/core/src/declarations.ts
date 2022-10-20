interface Ethereum {
    send: unknown
    enable: () => Promise<string[]>
    request: (options: object) => Promise<any>
    on?: (method: string, listener: (...args: any[]) => void) => void
    removeListener?: (method: string, listener: (...args: any[]) => void) => void
}

declare interface Window {
    ethereum?: Ethereum
}

declare module 'vue'
