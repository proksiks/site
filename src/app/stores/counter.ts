export const useCountStore = defineStore("counter", {
    state: () => {
        return {
            count: 1
        }
    },
    actions: {
        increment() {
            this.count++
        }
    },
    getters: {
        doubleCount: (state) => state.count * 2
    }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useCountStore, import.meta.hot))
}