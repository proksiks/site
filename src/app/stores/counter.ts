// Options API
//export const useCountStore = defineStore("counter", {
//    state: () => {
//        return {
//            count: 1
//        }
//    },
//    actions: {
//        increment() {
//            this.count++
//        }
//    },
//    getters: {
//        doubleCount: (state) => state.count * 2
//    }
//})

export const useCount = defineStore('counter', () => {
    const count = ref(1)
    const doubleCount = computed(() => count.value * 2)
    function increment() { count.value++ }
    return { count, increment, doubleCount }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useCount, import.meta.hot))
}