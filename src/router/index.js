//配置路由
import Vue from 'vue';
import VueRouter from 'vue-router';
//使用插件
Vue.use(VueRouter);
//引入路由组件
import Home from '@/pages/Home';
import Search from '@/pages/Search';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Info from '@/pages/Info';
//先保存VueRouter原型对象的push
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
//重写push|replace方法
//第一个参数：跳转位置（传递的参数）
//第二个参数：成功的回调
//第三个参数：失败的回调
//call||apply区别:
// 相同点：都可以调用函数一次，都可以篡改一次函数的上下文
// 不同点：call与apply传递参数：call传递参数用‘,’隔开，apply方法执行，传递数组
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject);
  } else {
    originPush.call(this, location, () => { }, () => { });
  }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject);
  } else {
    originReplace.call(this, location, () => { }, () => { });
  }
}

//配置路由
export default new VueRouter({
  //配置路由
  routes: [
    {
      name: "home",
      path: "/home",
      component: Home,
      meta: {
        show_header: true,
        show_logo: false,
        show_search: true,
        show_footer: false
      },
    },
    {
      name: "search",
      path: "/search/:keyword?",
      component: Search,
      meta: {
        show_header: true,
        show_logo: false,
        show_search: true,
        show_footer: false
      },
    },
    {
      name: "login",
      path: '/login',
      component: Login,
      meta: {
        show_header: true,
        show_logo: true,
        show_search: false,
        show_footer: false
      },
    },
    {
      name: "register",
      path: '/register',
      component: Register,
      meta: {
        show_header: true,
        show_logo: true,
        show_search: false,
        show_footer: false
      },
    },
    {
      name: "info",
      path: '/info',
      component: Info,
      meta: {
        show_header: true,
        show_logo: true,
        show_search: false,
        show_footer: false
      },
    },
    //重定向，项目运行时，访问/，定向至首页
    {
      path: '*',
      redirect: '/home',
    },
  ],
});
