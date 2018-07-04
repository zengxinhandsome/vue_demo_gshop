<template>
	<header class="header">
		<slot name="left"></slot>
		<span class="header_title">
			<span class="header_title_text ellipsis">{{title}}</span>
		</span>
		<slot name="right"></slot>
	</header>
</template>

<script>
	export default {
		props: {
			title: String
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header
    background-color #02a774
    position fixed
    z-index 100
    left 0
    top: 0
    width 100%
    height: 45px
    .header_search
      position absolute
      left 15px
      top 50%
      transform translateY(-50%)
      width 10%
      height 50%
      .icon-sousuo
        font-size 25px
        color #ffffff
    .header_title
      position absolute
      top 50%
      left 45%
      transform translate(-50%,-50%)
      width 50%
      color white
      text-align center
      maigin-left -5%
      .header_title_text
        font-size 20px
        color white
        display block
      .ellipsis
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
    .header_login
      font-size 14px
      color white
      position absolute
      right 15px
      top 23px
      transform translateY(-50%)
      .header_login_text
        color white
</style>