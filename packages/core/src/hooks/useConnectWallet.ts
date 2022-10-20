import { ref } from 'vue';
import { connector } from "../types";
import store from "../store";

export default (connector: connector) => {
    if (store.vueVersion > 3) {
        const account = ref('')
        const provider = ref({})
        const error = ref(null)
        store.currentConnector = connector
        connector.activate().then(res => {
            account.value = res.account
            provider.value = res.provider
            store.provider = res.provider
        }).catch(err => {
            error.value = err
        })

        return {
            account,
            provider,
            error
        }
    } else {
        return connector.activate()
    }
}
