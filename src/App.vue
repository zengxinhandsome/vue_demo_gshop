<template>
  <div>
    <router-view/>
	<FooterGuide v-show="$route.meta.showFooter"/>
	<!-- 
		这里只有 msite order profile search 四个路由有 
		meta: {
				showFooter: true
			}
		所以只有在 msite order profile search 这四个路由显示的时候，FooterGuide组件 才会显示
	 -->
  </div>
</template>

<script>
	import FooterGuide from './components/FooterGuide/FooterGuide.vue'

	export default {
		components: {
			FooterGuide
		}
	}
</script>

<style>
</style>
