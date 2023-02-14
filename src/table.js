import { defineComponent, h } from 'vue'

export default defineComponent({
    render() {
        try {
            console.log(123)
            this.$slots.default?.({
                row: {},
                column: {},
                $index: -1,
            })
            return h('div', 111)
        } catch {
            return h('div', 222)
        }
    },
})
