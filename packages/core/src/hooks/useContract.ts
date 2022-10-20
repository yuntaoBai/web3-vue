import store from "../store";

export default (abi: object, contractAddress: string, options?: {
    method?: string
    params?: any[]
    options?: object
}) => {
    const Contract = store.web3?.eth.Contract
    const contract = new (Contract as any)(abi, contractAddress, options?.options)
    if (options?.method) {
        return contract.methods[options?.method](...(options?.params || []))
    } else {
        return contract.methods
    }
}
