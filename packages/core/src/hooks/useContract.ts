import store from "../store";

export default (abi: object, contractAddress: string, options?: {
    methods?: string
    options?: object
}) => {
    const Contract = store.web3.eth.Contract
    const contract = new (Contract as any)(abi, contractAddress, options?.options)
    if (options?.methods) {
        return contract.methods[options?.methods]
    } else {
        return contract.methods
    }
}
