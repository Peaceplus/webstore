// 对api进行统一管理
import requests from "./request";

export const reqCategoryList = () => {
    // 发请求axios返回Promise对象
    // 项目测试，url需自行重新搭建并部署接口
    return requests({ url: 'http://gmall-h5-api.atguigu.cn/api/product/getBaseCategoryList', method: 'get' });
}