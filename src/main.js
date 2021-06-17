import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import aws_exports from './aws-exports';
import Amplify from 'aws-amplify';
import '@aws-amplify/ui-vue';
import AsyncComputed from 'vue-async-computed'
import VueSmoothScroll from 'vue2-smooth-scroll'
import BackToTop from 'vue-backtotop'
import VueScrollTo from 'vue-scrollto'
import DrawerLayout from "vue-drawer-layout";
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import './quasar'

Vue.config.productionTip = false

Amplify.configure(aws_exports);
Vue.use(AsyncComputed)
Vue.use(VueSidebarMenu)
Vue.use(VueScrollTo)
Vue.use(DrawerLayout);
Vue.use(VueSmoothScroll, {
  duration:750,
})
Vue.use(BackToTop)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
