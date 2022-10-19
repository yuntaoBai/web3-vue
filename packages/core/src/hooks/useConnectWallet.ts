import { ref } from 'vue';
import {connector} from "types";
import store from "store";

export default function(connector: connector) {
    const account = ref('')
    const provider = ref({})
    if(!connector) {
        throw Error('error')
        return {
            account,
            provider
        }
    }
    connector.activate().then(res => {
        account.value = res.account
        provider.value = res.provider
        store.provider = res.provider
    })

    return {
        account,
        provider
    }
}
