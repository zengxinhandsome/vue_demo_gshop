<template>
  <footer class="footer_guide border-1px">
    <!-- 只有当 路由的路径 等于 /msite 才会有相应的样式, 其他的类推 -->
    <a @click="goTo('/msite')" class="guide_item" :class="{on:'/msite' === $route.path}">
      <span class="item_icon">
        <i class="iconfont icon-U"></i>
      </span>
      <span>外卖</span>
    </a>
    <a @click="goTo('/search')" :class="{on:'/search' === $route.path}" class="guide_item">
      <span class="item_icon">
        <i class="iconfont icon-xingtaiduICON_sousuo--"></i>
      </span>
      <span>搜索</span>
    </a>
    <a @click="goTo('/order')" :class="{on:'/order' === $route.path}" class="guide_item">
      <span class="item_icon">
        <i class="iconfont icon-dingdan1"></i>
      </span>
      <span>订单</span>
    </a>
    <a @click="goTo('/profile')" :class="{on:'/profile' === $route.path}" class="guide_item">
      <span class="item_icon">
        <i class="iconfont icon-wode"></i>
      </span>
      <span>我的</span>
    </a>
  </footer>
</template>

<script>
	export default {
		methods: {
			goTo(path) {
				this.$router.replace(path);  
			}

      /*
        $router.replace 和 $router.push 的区别
          replace不会向history添加新纪录，而是替换掉当前的history记录
          简单的说就是
          replace 没有回退
          push 有回退
      */
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .footer_guide  //footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #02a774
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>
