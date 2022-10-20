import { ref } from "vue"
import store from "../store"
export default () => {
    const { provider } = ref({})
    provider.value = store.provider
    return {
        provider
    }
}
