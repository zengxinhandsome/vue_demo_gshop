import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'

import './mock/mockServer'	// 加载，mockserver即可

new Vue({
	el: "#app",
	render: h => h(App),
	router,
	store
})