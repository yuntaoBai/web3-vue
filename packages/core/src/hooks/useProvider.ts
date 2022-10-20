import { ref } from "vue"
import store from "../store"
export default () => {
    if (store.vueVersion > 2) {
        const { provider } = ref({})
        provider.value = store.provider
        return {
            provider
        }
    } else {
        return store.provider
    }
}
