
import Vue from "vue";
import VueRouter from "vue-router";
import RouterPrefetch from 'vue-router-prefetch'
import App from "./App";
import router from "./router/index";
import BlackDashboard from "./plugins/blackDashboard";
import i18n from "./i18n"
import './registerServiceWorker'
import XLSX from 'xlsx';
// import 'element-ui/lib/theme-chalk/index.css';
// import Element from 'element-ui'
// Vue.use(Element);
import VueApexCharts from 'vue-apexcharts';
import myStorage from './store/sessionStorage';
import store from '@/store';

Vue.use(BlackDashboard);
Vue.use(VueRouter);
Vue.use(RouterPrefetch);
Vue.use(XLSX);
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