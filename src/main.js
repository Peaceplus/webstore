import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueParticles from 'vue-particles'
//三级联动组件--全局组件
import TypeNav from '@/pages/Home/TypeNav';
//参数：全局组件的名字，组件名
Vue.component(TypeNav.name, TypeNav);
//引入路由
import router from '@/router';

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueParticles)

new Vue({
  render: h => h(App),
  //注册路由：底下写法KV一致省略V【router小写】
  //注册路由信息：当书写router时，组件身上都拥有$route,$router属性
  router
}).$mount('#app')
