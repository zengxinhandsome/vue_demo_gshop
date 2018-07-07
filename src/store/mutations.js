/*包含n个直接更新状态方法的对象*/
import {
  RECEIVE_INFO,
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  DECREMENT_FOOD_COUNT,
  INCREMENT_FOOD_COUNT,
  CLEAR_CART,
  RECEIVE_SEARCH_SHOPS
} from './mutation-type'

import Vue from 'vue'

export default {
  [RECEIVE_INFO](state, {info}) {
    state.info = info
  },

  [RECEIVE_RATINGS](state, {ratings}) {
    state.ratings = ratings
  },

  [RECEIVE_GOODS](state, {goods}) {
    state.goods = goods
  },
  [INCREMENT_FOOD_COUNT](state, {food}) {
    if(!food.count) {   // 第一次增加
      // food.count = 1;   // 新增属性，如果这样写的话没有数据绑定
      /*
        对象
        属性名
        属性值
      */
      Vue.set(food, "count", 1);
      // 当点击增加按钮时，说明有数量了，就需要将这个food添加到 cartFoods中去
      state.cartFoods.push(food);
    } else {
      food.count++;
    }
  },
  [DECREMENT_FOOD_COUNT](state, {food}) {
    if(food.count) {  // 只有有值才去减
      food.count--;
      if(food.count === 0) {
        // 当food的count为0时，需要立即从cartFoods中移除
        state.cartFoods.splice(state.cartFoods.indexOf(food), 1);
      }
    }
  },
  [CLEAR_CART](state) {
    // 清除food中的count
    state.cartFoods.forEach(food => food.count = 0);
    // 移除购物车中所有购物项  
    // 注意：如果不进行上面一步操作，直接让cartFoods = [],则会导致，虽然购物车清空了，但是count还是保持原来的数量，
    // 所以必须要先将 cartFoods 中的food的count都归为0
    state.cartFoods = [];
  },
  [RECEIVE_SEARCH_SHOPS](state,{searchShops}){
    state.searchShops = searchShops
  }

}
