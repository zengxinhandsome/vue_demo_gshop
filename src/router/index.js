import Vue from 'vue'
import VueRouter from 'vue-router'


/*
	路由组件懒加载: 
	打包的时候对js文件进行代码分割,就是将一份变成多份，
	在需要的时候才去后台请求路由组件相应的js代码

	一般顶级路由组件需要请求的代码比较多，就会使用路由组件懒加载的方式，小的路由组件就没必要了
*/

// import MSite from '../pages/MSite/MSite.vue'
// import Search from '../pages/Search/Search.vue'
// import Order from '../pages/Order/Order.vue'
// import Profile from '../pages/Profile/Profile.vue'

// 返回路由组件的函数，只有执行此函数才会加载路由组件，这个函数在请求对应的路由路径时才会执行
//
const MSite = () => import('../pages/MSite/MSite.vue')
const Search = () => import('../pages/Search/Search.vue')
const Order = () => import('../pages/Order/Order.vue')
const Profile = () => import('../pages/Profile/Profile.vue')

import Login from '../pages/Login/Login.vue'
import Shop from '../pages/Shop/Shop.vue'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods.vue'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings.vue'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo.vue'

// 声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
	// 所有路由
	routes: [
		{
			path: '/msite',
			component: MSite,	
			meta: {
				showFooter: true
			}
		},
		{
			path: '/search',
			component: Search,
			meta: {
				showFooter: true
			}
		},
		{
			path: '/order',
			component: Order,
			meta: {
				showFooter: true
			}
		},
		{
			path: '/profile',
			component: Profile,
			meta: {
				showFooter: true
			}
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/shop',
			component: Shop,
			children: [
				{
					path: '/shop/goods',
					component: ShopGoods
				},
				{
					path: '/shop/ratings',
					component: ShopRatings
				},
				{
					path: '/shop/info',
					component: ShopInfo
				},
				{
					path: '',
					redirect: '/shop/goods'
				}
			]
		},
		{
			path: '/',
			redirect: '/msite'
		}
	]
})