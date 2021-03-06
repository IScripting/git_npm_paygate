import 'vuetify/dist/vuetify.min.css'
import 'toastr/build/toastr.min.css'
import './stylus/main.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import { store } from './store'
import VueContentPlaceholders from 'vue-content-placeholders'
import VueMoment from 'vue-moment'
import Datetime from 'vue-datetime-2'

Vue.use(VueMoment)
Vue.use(VueContentPlaceholders)
Vue.use(Vuetify)
Vue.use(Datetime)

Vue.config.productionTip = false

new Vue({ // eslint-disable-line no-new
  el: '#app',
  router,
  store,
  render: h => h(App)
})
