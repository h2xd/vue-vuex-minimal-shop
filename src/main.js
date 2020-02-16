import Vue from 'vue';
import Vuex from 'vuex';

import router from './config/router';
import VuexStoreConfig from './config/store';
import App from './components/App.vue';

// if (enableAnalytics) {
//   const VueAnalytics = require('vue-analytics').default;
//   Vue.use(VueAnalytics, {
//     id: analyticsKey,
//     router,
//     debug: {
//       enabled: process.env.NODE_ENV !== 'production',
//       sendHitTask: process.env.NODE_ENV === 'production' || !disableAnalyticsInDebug,
//     },
//   });
// }

Vue.use(Vuex);

const store = new Vuex.Store(VuexStoreConfig);

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');