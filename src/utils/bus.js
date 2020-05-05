import Vue from 'vue'

const bus = new Vue({
    methods: {
        on(event, callback) {
            this.$on(event, callback)
            return this
        },

        once(event, callback) {
            this.$once(event, callback)
            return this
        },

        off(event, callback) {
            this.$off(event, callback)
            return this
        },

        emit(event, ...args) {
            this.$emit(event, ...args)
            return this
        }
    }
})

const eventBus = {
    install(Vue) {
        Object.defineProperty(Vue.prototype, '$bus', {
            get: () => bus
        })
    }
}


Vue.use(eventBus)

