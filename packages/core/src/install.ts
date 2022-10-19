import store from "sore";

export default function (app: object, options?: object) {
    // @ts-ignore
    app.config.globalProperties.$web3Utils = store.web3.utils
    console.log(options)
}
