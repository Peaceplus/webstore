// 对api进行统一管理
import requests from "./request";
import ajax from './ajax'

//获取商品的三级分类列表
export const reqBaseCategoryList = ()=>ajax.get('/product/getBaseCategoryList')


export const reqCategoryList = () => {
    // 发请求axios返回Promise对象
    // 项目测试，url需自行重新搭建并部署接口
    return requests({ url: 'http://gmall-h5-api.atguigu.cn/api/product/getBaseCategoryList', method: 'get' });
}