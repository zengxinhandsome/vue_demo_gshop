<template>
	<div class="shop_container">
		<ul class="shop_list">
			<li class="shop_li border-1px" @click="$router.push('/shop')">
			<a>
				<div class="shop_left">
					<img class="shop_img" src="./images/shop/1.jpg">
				</div>
				<div class="shop_right">
					<section class="shop_detail_header">
						<h4 class="shop_title ellipsis" >油焖大虾</h4>
						<ul class="shop_detail_ul">
							<li class="supports">蜂鸟专送</li>
						</ul>
					</section>
					<section class="shop_rating_order">
						<section class="shop_rating_order_left">
							<Star :score="shop.ration" :size="24"/>
							<div class="rating_section">
								{{shop.ration}}
							</div>
							<div class="order_section">
								月售222单
							</div>
						</section>
						<section class="shop_rating_order_right">
							<span class="delivery_style delivery_right"></span>
						</section>
					</section>
					<section class="shop_distance">
						<p class="shop_delivery_msg">
							<span>¥111起送</span>
							<span class="segmentation">/</span>
							<span>配送费约¥111</span>
						</p>
					</section>
				</div>
			</a>
		</li>
		<li class="shop_li border-1px">
			<a>
				<div class="shop_left">
					<img class="shop_img" src="./images/shop/2.jpg">
				</div>
				<div class="shop_right">
					<section class="shop_detail_header">
						<h4 class="shop_title ellipsis" >可乐鸡蛋卷</h4>
						<ul class="shop_detail_ul">
							<li class="supports">蜂鸟专送</li>
						</ul>
					</section>
					<section class="shop_rating_order">
						<section class="shop_rating_order_left">
							<Star :score="shop.ration" :size="24"/>
							<div class="rating_section">
								{{shop.ration}}
							</div>
							<div class="order_section">
								月售222单
							</div>
						</section>
						<section class="shop_rating_order_right">
							<span class="delivery_style delivery_right"></span>
						</section>
					</section>
					<section class="shop_distance">
						<p class="shop_delivery_msg">
							<span>¥111起送</span>
							<span class="segmentation">/</span>
							<span>配送费约¥111</span>
						</p>
					</section>
				</div>
			</a>
		</li>
		<li class="shop_li border-1px">
			<a>
				<div class="shop_left">
					<img class="shop_img" src="./images/shop/3.jpg">
				</div>
				<div class="shop_right">
					<section class="shop_detail_header">
						<h4 class="shop_title ellipsis" >美味灌汤包</h4>
						<ul class="shop_detail_ul">
							<li class="supports">蜂鸟专送</li>
						</ul>
					</section>
					<section class="shop_rating_order">
						<section class="shop_rating_order_left">
							<Star :score="shop.ration" :size="24"/>
							<div class="rating_section">
								{{shop.ration}}
							</div>
							<div class="order_section">
								月售222单
							</div>
						</section>
						<section class="shop_rating_order_right">
							<span class="delivery_style delivery_right"></span>
						</section>
					</section>
					<section class="shop_distance">
						<p class="shop_delivery_msg">
							<span>¥111起送</span>
							<span class="segmentation">/</span>
							<span>配送费约¥111</span>
						</p>
					</section>
				</div>
			</a>
		</li>
		<li class="shop_li border-1px">
			<a>
				<div class="shop_left">
					<img class="shop_img" src="./images/shop/4.jpg">
				</div>
				<div class="shop_right">
					<section class="shop_detail_header">
						<h4 class="shop_title ellipsis" >好吃麻辣烫</h4>
						<ul class="shop_detail_ul">
							<li class="supports">蜂鸟专送</li>
						</ul>
					</section>
					<section class="shop_rating_order">
						<section class="shop_rating_order_left">
							<Star :score="shop.ration" :size="24"/>
							<div class="rating_section">
								{{shop.ration}}
							</div>
							<div class="order_section">
								月售222单
							</div>
						</section>
						<section class="shop_rating_order_right">
							<span class="delivery_style delivery_right"></span>
						</section>
					</section>
					<section class="shop_distance">
						<p class="shop_delivery_msg">
							<span>¥111起送</span>
							<span class="segmentation">/</span>
							<span>配送费约¥111</span>
						</p>
					</section>
				</div>
			</a>
		</li>
	</ul>
</div>
</template>

<script>
import Star from '../../components/Star/Star.vue'
	export default {
	data () {
		return {
			shop: {
				ration: 4.5
			}
		}
	},
	components: {
		Star
	}
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .shop_container
    //margin-bottom 50px
    width 100%
    .shop_list
      width 100%
      padding 0
      margin 0
      margin-bottom 50px
      .shop_li
        width 100%
        bottom-border-1px(#CCCCCC)
        >a
          bottom-border-1px(#CCCCCC)
          clearFix()
          width 100%
          height 105px
          display block
          box-sizing border-box
          padding 15px 8px
          .shop_left
            float left
            box-sizing border-box
            width 23%
            height 75px
            padding-right 10px
            .shop_img
              display block
              width 100%
              height 100%
          .shop_right
            float right
            width 77%
            height 71.2px
            .shop_detail_header
              height 17.2px
              width 100%
              .shop_title
                width 140px
                float left
                color #333
                font-size 16px
                line-height 16px
                font-weight 700
                &::before
                  content '品牌'
                  display inline-block
                  font-size 11px
                  line-height 11px
                  color #333
                  background-color #ffd930
                  padding 2px 2px
                  border-radius 2px
                  margin-right 5px
              .ellipsis
                overflow hidden
                text-overflow ellipsis
                white-space nowrap
              .shop_detail_ul
                float right
                margin-top 3px
                .supports
                  float left
                  font-size 10px
                  color #999
                  border 1px solid #f1f1f1
                  padding 0 2px
                  border-radius 2px
                  height 11.6px
            .shop_rating_order
              clearFix()
              height 16px
              width 100%
              margin-top 18px
              margin-bottom 8px
              .shop_rating_order_left
                float left
                color #ff9a0d
                .rating_section
                  float left
                  font-size 10px
                  color #ff6000
                  margin-left 4px
                .order_section
                  float left
                  font-size 10px
                  color #666
                  transform scale(.8)
              .shop_rating_order_right
                float right
                font-size 0
                .delivery_style
                  transform-origin 35px 0
                  transform scale(.7)
                  display inline-block
                  font-size 12px
                  padding 1px
                  border-radius 2px
                .delivery_left
                  color #fff
                  margin-right -10px
                  background-color #02a774
                  border 1px solid #02a774
                .delivery_right
                  color #02a774
                  border 1px solid #02a774
            .shop_distance
              clearFix()
              height 12px
              width 100%
              font-size 12px
              .shop_delivery_msg
                float left
                transform-origin 0
                transform scale(.9)
                color #666
                position absolute

              .segmentation
                color #ccc
</style>