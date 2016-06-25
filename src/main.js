import Vue from 'vue'
import VueMaterialComponents from 'vue-material-components'
import 'vue-material-components/assets/css/materialize.min.css'

import App from './App'

Vue.use(VueMaterialComponents)

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
