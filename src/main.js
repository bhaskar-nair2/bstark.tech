import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

import { DevicePlugin } from '@/plugins/device.js';
import 'vue-awesome/icons';
import Icon from 'vue-awesome/components/Icon';

import VueLazyload from 'vue-lazyload';

// const fb = require('./firebaseConfig.js');

Vue.component('v-icon', Icon);
Vue.use(DevicePlugin);
Vue.use(VueLazyload, {
	preLoad: 1.3,
	error: './img/blur.png',
	loading: './img/blur.png',
	attempt: 3
});

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');
