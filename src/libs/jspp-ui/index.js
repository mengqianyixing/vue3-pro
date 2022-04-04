import Selector from './components/Selector/index.vue'

const JsppUI = {}

JsppUI.install = function (Vue) {
    Vue.component(Selector.name, Selector)
}
export default JsppUI
