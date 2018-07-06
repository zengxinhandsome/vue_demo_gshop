<template>
	<div class="cartcontrol">
		<div class="iconfont icon-jian" 
			v-if="food.count"
			@click.stop="updateFoodCount(false)">
		</div>
		<div class="cart-count" 
			v-if="food.count">
		{{food.count}}
		</div>
		<div class="iconfont icon-add"
			@click.stop="updateFoodCount(true)">
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			food: Object
		},
		methods: {
			updateFoodCount(isAdd) {
				this.$store.dispatch('updateFoodCount', {isAdd, food: this.food});
			}
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .cartcontrol
    font-size 0
    display inline-block
    .cart-decrease
      display: inline-block
      padding: 6px
      line-height: 24px
      font-size: 24px
      color: rgb(0, 160, 220)
    .icon-jian
      display: inline-block
      padding 6px
      line-height 24px
      font-size 24px
      color $green
      &.move-enter-active, &.move-leave-active
        transition all .5s
      &.move-enter, &.move-leave-to
        opacity 0
        transform translateX(15px) rotate(180deg)
    .cart-count
      display: inline-block
      vertical-align: top
      width: 12px
      padding-top: 6px
      line-height: 24px
      text-align: center
      font-size: 10px
      color: rgb(147, 153, 159)
    .icon-add
      display: inline-block
      padding: 6px
      line-height: 24px
      font-size: 24px
      color $green
</style>