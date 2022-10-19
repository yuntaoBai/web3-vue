import store from "sore";

export default function (app, options) {
    app.config.globalProperties.$web3Utils = store.web3.utils
}
