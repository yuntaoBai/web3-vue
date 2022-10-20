import store from "../store";
export default (hash: string) => {
    return store.web3?.eth.getTransactionReceipt(hash)
}
