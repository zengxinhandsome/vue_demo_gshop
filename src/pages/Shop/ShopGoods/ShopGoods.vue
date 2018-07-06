<template>
  <div>
    <div class="goods">
      <div class="menu-wrapper">
        <ul>
          <li class="menu-item" 
          v-for="(good, index) in goods" 
          :key="index"
          :class="{current: index === currentIndex}"
          @click="clickMenuItem(index)">
            <span class="text bottom-border-1px">
              <img class="icon" :src="good.icon" v-if="good.icon">
              {{good.name}}
            </span>
          </li>
        </ul>
      </div>
      <div class="foods-wrapper">
        <ul ref="foodsUl">
          <li class="food-list-hook" v-for="(good,index) in goods" :key="index" >
            <h1 class="title">{{good.name}}</h1>
            <ul >
              <li class="food-item bottom-border-1px" 
              v-for="(food, index) in good.foods" 
              :key="index"
              @click="showFood(food)">
                <div class="icon">
                  <img width="57" height="57" :src="food.icon">
                </div>
                <div class="content">
                  <h2 class="name">{{food.name}}</h2>
                  <p class="desc">{{food.description}}</p>
                  <div class="extra">
                    <span class="count">月售{{food.sellCount}}份</span>
                    <span>好评率{{food.rating}}%</span></div>
                  <div class="price">
                    <span class="now">￥{{food.price}}</span>
                    <span class="old" v-if="food.oldPrice">￥{{food.oldPrice}}</span>
                  </div>
                  <div class="cartcontrol-wrapper">
                  	<CartControl :food="food"/>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <ShopCart/>
    </div>
    <Food :food="food" ref="food"/>
  </div>
</template>

<script>
	import {mapState} from 'vuex'
	import BScroll from 'better-scroll'
	import CartControl from '../../../components/CartControl/CartControl.vue'
	import Food from '../../../components/Food/Food.vue'
	import ShopCart from '../../../components/ShopCart/ShopCart.vue'
	export default {
		data() {
			return {
				scrollY: 0,	// 右侧滑动的Y轴的坐标(滑动过程中实时变化)
				tops: [],	// 所有右侧分类li的top组成的数组(列表初始化显示后就不再变化)
				food: {}
			}
		},
		mounted() {
			this.$store.dispatch('getShopGoods', () => {	// 数据更新显示后执行
				/*
					nextTick作用: $nextTick(() => {}) 与DOM相关操作写在该函数回调中，确保DOM已渲染
				*/
				this.$nextTick(() => {
					this.initScroll();
					this.initTops();
				});
			});
		},
		computed: {
			...mapState(["goods"]),
			// 计算得到当前分类的下标
			currentIndex() {
				/*
					基本思想：刚开始滑动为0，左侧对应第一个分类，当刚好滑动到第一个分类列表的高度时，左侧对应第二个分类
				*/
				const {scrollY, tops} = this;
				let index = Array.prototype.slice.call(tops).findIndex((top, index) => {
					return scrollY >= tops[index] && scrollY < tops[index + 1];
				});
				return index;
			}
		},
		methods: {
			initScroll() {
				// 列表显示之后创建,因为只有获取到后台数据后列表显示了才能滑动
				new BScroll('.menu-wrapper', {
					click: true
				});
				this.foodsScroll = new BScroll('.foods-wrapper', {
					probeType: 2,	// 当你需要添加事件时，需要设置这个属性，默认0(不触发事件),还有1, 2, 3
					click: true
				});

				// 给右侧列表绑定scroll监听
				this.foodsScroll.on("scroll", ({x, y}) => {	// 这里是传一个对象，这个对象里面有x，y两个属性,这里用的是解构赋值
					// console.log(y);
					this.scrollY = Math.abs(y);
				});

				// 给右侧列表绑定scrollEnd监听, 因为惯性滑动不会实时监听scrollY的值
				this.foodsScroll.on("scrollEnd", ({x, y}) => {
					// console.log("scrollEnd", x, y);
					this.scrollY = Math.abs(y);
				});
			},
			initTops() {
				// 1.初始化tops
				const tops = [];
				let top = 0;
				tops.push(top);
				// 找到所有分类的li
				const lis = this.$refs.foodsUl.getElementsByClassName('food-list-hook');
				Array.prototype.slice.call(lis).forEach(li => {
					top += li.clientHeight;
					tops.push(top);
				});
				// console.log(tops);
				this.tops = tops;
			},
			clickMenuItem(index) {		// 点击左侧列表，右侧列表也滑动到对应的位置
				// console.log(index);
				const y = this.tops[index];		// 得到目标位置的对应的top值
				this.scrollY = y;	// 立即更新scrollY的值(让点击的分类项成为当前分类项)
				this.foodsScroll.scrollTo(0, -y, 300);
			},
			showFood(food) {
				// 设置food
				this.food = food;
				// 显示food组件，在父组件中调用子组件对象的方法
				this.$refs.food.toggleShow();
			}
		},
		components: {
			 CartControl,
			 Food,
			 ShopCart
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .goods
    display: flex
    position: absolute
    top: 195px
    bottom: 46px
    width: 100%
    background: #fff;
    overflow: hidden
    .menu-wrapper
      flex: 0 0 80px
      width: 80px
      background: #f3f5f7
      .menu-item
        display: table
        height: 54px
        width: 56px
        padding: 0 12px
        line-height: 14px
        &.current
          position: relative
          z-index: 10
          margin-top: -1px
          background: #fff
          color: $green
          font-weight: 700
          .text
            border-none()
        .icon
          display: inline-block
          vertical-align: top
          width: 12px
          height: 12px
          margin-right: 2px
          background-size: 12px 12px
          background-repeat: no-repeat
        .text
          display: table-cell
          width: 56px
          vertical-align: middle
          bottom-border-1px(rgba(7, 17, 27, 0.1))
          font-size: 12px
    .foods-wrapper
      flex: 1
      .title
        padding-left: 14px
        height: 26px
        line-height: 26px
        border-left: 2px solid #d9dde1
        font-size: 12px
        color: rgb(147, 153, 159)
        background: #f3f5f7
      .food-item
        display: flex
        margin: 18px
        padding-bottom: 18px
        bottom-border-1px(rgba(7, 17, 27, 0.1))
        &:last-child
          border-none()
          margin-bottom: 0
        .icon
          flex: 0 0 57px
          margin-right: 10px
        .content
          flex: 1
          .name
            margin: 2px 0 8px 0
            height: 14px
            line-height: 14px
            font-size: 14px
            color: rgb(7, 17, 27)
          .desc, .extra
            line-height: 10px
            font-size: 10px
            color: rgb(147, 153, 159)
          .desc
            line-height: 12px
            margin-bottom: 8px
          .extra
            .count
              margin-right: 12px
          .price
            font-weight: 700
            line-height: 24px
            .now
              margin-right: 8px
              font-size: 14px
              color: rgb(240, 20, 20)
            .old
              text-decoration: line-through
              font-size: 10px
              color: rgb(147, 153, 159)
          .cartcontrol-wrapper
            position: absolute
            right: 0
            bottom: 12px
</style>