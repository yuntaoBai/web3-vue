import store from "../store";
export default (address: string) => {
    return store.web3.eth.getBalance(address)
}
