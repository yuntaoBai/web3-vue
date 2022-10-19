import store from "../store";

export default (abi: [], contractAddress: string, options?: {}) => {
    const Contract = store.web3.eth.Contract
    const contract = new (Contract as any)(abi, contractAddress, options)
    return contract.methods
}
