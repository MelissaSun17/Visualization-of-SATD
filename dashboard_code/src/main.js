import Vue from "vue";
import App from "./App";
import VueRouter from "vue-router";
import RouterPrefetch from 'vue-router-prefetch'
import router from "./router/index";
import BlackDashboard from "./plugins/blackDashboard";
import i18n from "./i18n"
import './registerServiceWorker'
import XLSX from 'xlsx';
import Element from 'element-ui'
import VueApexCharts from 'vue-apexcharts'
import myStorage from './store/sessionStorage' 
import store from '@/store'

Vue.use(BlackDashboard);
Vue.use(VueRouter);
Vue.use(RouterPrefetch);
Vue.use(XLSX);
Vue.use(Element);
Vue.use(VueApexCharts);
Vue.prototype.$storage = myStorage

/* eslint-disable no-new */
new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount("#app");
Vue.component('apexchart', VueApexCharts)