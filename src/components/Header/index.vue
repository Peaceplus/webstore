<template>
  <!-- 头部 -->
  <header class="header">
    <!-- 头部的第一行 顶部区域-->
    <div class="top">
      <div class="container">
        <div class="loginList">
          <p>网上商城欢迎您！</p>
          <p>
            <span>请</span>
            <!-- 声明式导航：务必要有to属性 -->
            <router-link class="login" to="/login">登录</router-link>
            <router-link class="register" to="/register">立即注册</router-link>
          </p>
        </div>

        <div class="typeList">
          <a href="###">我的订单</a>
          <a href="###">我的购物车</a>
          <a href="###">已购买的商品</a>
          <a href="###">收藏夹</a>
          <router-link class="info" to="/info">个人中心</router-link>
          <a href="###">卖家中心</a>
          <a href="###">联系客服</a>
        </div>
      </div>
    </div>
    <!-- 头部的第二行 搜索区域 -->
    <div class="bottom">
      <div class="logoArea">
        <router-link class="logoImg" to="/home">
          <img src="../../assets/images/logo.png" alt="logo">
        </router-link>
      </div>

      <div class="search-container">
        <div class="searchArea">
          <form action="###" class="searchForm">
            <input type="text" id="autocomplete" autocomplete="off" v-model="keyword" />
            <button type="button" @click="goSearch">搜索</button>
          </form>
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
      keyword: "",
    };
  },

  mounted() {},

  methods: {
    //搜索按钮的回调函数：向search路由进行跳转
    goSearch() {
      //路由传参：
      //1.字符串
      //this.$router.push("/search/" + this.keyword+"?k="+this.keyword.toUpperCase());
      //2.模板字符串
      //this.$router.push(`/search/${this.keyword}?k=${this.keyword.toUpperCase()}`);
      //3.对象
      this.$router.push(
        {
          name: "search",
          params: { keyword: this.keyword },
          query: { k: this.keyword.toUpperCase() },
        },
        () => {},
        () => {}
      );
    },
  },
};
</script>

<style lang="less" scoped></style>
