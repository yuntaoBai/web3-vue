import store from "../store";
export default () => {
    return store.web3.eth.getGasPrice()
}
