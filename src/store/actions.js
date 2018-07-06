/*包含n个间接更新状态方法的对象*/
import {
  RECEIVE_RATINGS,
  RECEIVE_GOODS,
  RECEIVE_INFO,
  DECREMENT_FOOD_COUNT,
  INCREMENT_FOOD_COUNT,
  CLEAR_CART,
  RECEIVE_SEARCH_SHOPS
} from './mutation-type'

import {
  reqShopGoods,
  reqShopInfo,
  reqShopRatings
} from '../api'

export default {

  // 异步获取商家信息
  async getShopInfo({commit}) {
    const result = await reqShopInfo()
    if(result.code===0) {
      const info = result.data
      commit(RECEIVE_INFO, {info})
      //数据更新了，通知一下组件
    }
  },

// 异步获取商家评价列表
  async getShopRatings({commit}) {
    const result = await reqShopRatings()
    if(result.code===0) {
      const ratings = result.data
      commit(RECEIVE_RATINGS, {ratings})
      //数据更新了，通知一下组件
    }
  },

// 异步获取商家商品列表
  async getShopGoods({commit}, callback) {
    const result = await reqShopGoods()
    if(result.code===0) {
      const goods = result.data
      commit(RECEIVE_GOODS, {goods})
      callback && callback()  // 数据更新显示完成后执行
    }
  },

  // 同步更新food中的count值
  updateFoodCount({commit}, {isAdd, food}) {
    if(isAdd) {
      commit(INCREMENT_FOOD_COUNT, {food});
    } else {
      commit(DECREMENT_FOOD_COUNT, {food});
    }
  },

  //同步清除购物车
  clearCart({commit}){
     commit(CLEAR_CART)
  },

  //异步获取商家商品列表
  async searchShops({commit,state},keywords){
    const geohash = state.latitude+','+state.longitude
    const result = await reqSearchShop(geohash,keywords)
    if(result.code===0){
      const searchShops = result.data
      commit(RECEIVE_SEARCH_SHOPS,{searchShops})
    }
  }
}
