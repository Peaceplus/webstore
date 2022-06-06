<template>
  <!-- 头部 -->
  <header class="header">
    <!-- 头部的第一行 顶部区域-->
    <div class="top">
      <div class="container">
        <div class="typeList">
          <router-link class="home" to="/home">
          <i class="iconfont icon-shopping"></i>网上商城</router-link>
        </div>
        <div class="loginList">
          <!-- 声明式导航：务必要有to属性 -->
          <div v-if="show" class="log-reg">
          <router-link class="login" to="/account">登录</router-link>
          <router-link class="register" to="/account">注册</router-link>
          </div>
          <span class="user">欢迎您 {{userName}}</span>
          <span class="exit" @click="Exit">退出</span>
          <router-link class="info" to="/info">
          <i class="iconfont icon-user"></i>个人中心</router-link>
          <router-link class="cart" to="/cart">
            <i class="iconfont icon-cart"></i>购物车</router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import "@/assets/css/home.css";
export default {
  name: "Header",
  data() {
    return {
      activeIndex:'1',
      show:true,
    };
  },
  computed: {
    userName: function () {
      return localStorage.getItem("userName"); //获取用户名
    },
  },
  mounted() {
   this.Show();
  },

  methods: {

    handleSelect(key,keyPath){
      console.log(key,keyPath);
    },
    Show(){
      if(localStorage.getItem("userName") ==null){
        this.show = true;
        // console.log(sessionStorage.getItem("userName"));
      }
      else{
        this.show = false;
        // console.log(localStorage.getItem("userName"));
      }
    },
    Exit(){
      this.$router.go(0);
      localStorage.clear();
    }
  },
};
</script>

<style lang="less" scoped></style>
