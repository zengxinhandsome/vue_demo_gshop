import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'

import VueLazyLoad from 'vue-lazyload'
import loading from './common/imgs/loading.gif'
Vue.use(VueLazyLoad, {
	loading
})

import './filters'	// 加载过滤器

import './mock/mockServer'	// 加载，mockserver即可

new Vue({
	el: "#app",
	render: h => h(App),
	router,
	store
})