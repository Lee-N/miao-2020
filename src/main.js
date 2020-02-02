import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.config.productionTip = false
import VModal from 'vue-js-modal'

Vue.use(VModal, {
    dialog: true,
    dynamic: true
})
new Vue({
  render: h => h(App),
}).$mount('#app')
