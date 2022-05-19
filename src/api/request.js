// 对axios进行二次封装
import axios from "axios";
// 引入进度条
import nprogress from 'nprogress';
// 引入进度条样式
import "nprogress/nprogress.css"
// start：进度条开始 done：进度条结束
// 利用axios对象的方法create创建一个axios实例
// request就是axios
const requests = axios.create({
    // 配置对象
    // 基础路径，发送请求时，路径中会出现api，不需要再次输入
    baseURL: "/api",
    // 请求超时时间
    timeout: 5000,
});
// 请求拦截器：发送请求之前，请求拦截器可以检测到，可以在请求发出之前，完成一些业务
requests.interceptors.request.use((config) => {
    // config：配置对象，对象中有一个重要属性:header请求头
    // 进度条开始
    nprogress.start();
    return config;
});
// 响应拦截器
requests.interceptors.response.use((res) => {
    // 成功回调：服务器响应数据返回后，响应拦截器检测到后可以完成一些业务
    // 进度条结束
    nprogress.done();
    return res.data;
}, (error) => {
    // 响应失败回调
    return Promise.reject(new error('false'));
})

// 对外暴露
export default requests;