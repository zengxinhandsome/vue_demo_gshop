/*
包含n个接口请求函数的模块
函数的返回值: promise对象
 */
import ajax from './ajax'
const BASE_URL = '/api'


//	这三个是向外暴露的获取数据的接口

/*
 * 获取商家信息
*/
export const reqShopInfo = () => ajax('/info')

/*
 * 获取商家评价数组
 */
export const reqShopRatings = () => ajax('/ratings')

/*
 * 获取商家商品数组
 */
export const reqShopGoods = () => ajax('/goods')
