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
          <router-link class="login" to="/account">登录</router-link>
          <router-link class="register" to="/account">注册</router-link>
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
    };
  },
  computed: {
    userName: function () {
      return localStorage.getItem("userName"); //获取用户名
    },
  },
  mounted() {},

  methods: {
    handleSelect(key,keyPath){
      console.log(key,keyPath);
    }
  },
};
</script>

<style lang="less" scoped></style>
