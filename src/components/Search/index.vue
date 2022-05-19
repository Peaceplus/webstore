<template>
  <div class="navContainer">
    <div class="topContainer">
      <div class="logoArea">
        <router-link class="logoImg" to="/home">
          <img src="../../assets/images/logo.png" alt="logo" />
        </router-link>
      </div>
      <div class="searchArea">
        <form class="searchForm">
          <input
            type="text"
            id="autocomplete"
            autocomplete="off"
            v-model="keyword"
            placeholder="快来搜索你感兴趣的内容吧"
          />
          <el-button @click="goSearch" class="iconfont icon-search"></el-button>
        </form>
      </div>
      <el-menu
        class="topNav"
        :default-active="activeIndex"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1" @click="goHome">首页</el-menu-item>
        <el-menu-item index="2">服饰</el-menu-item>
        <el-menu-item index="3">食品</el-menu-item>
        <el-menu-item index="4">图书影像</el-menu-item>
        <el-menu-item index="5">运动户外</el-menu-item>
        <el-menu-item index="6">数码</el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
import "@/assets/css/home.css";
export default {
  name: "SearchComponets",

  data() {
    return {
      activeIndex: "1",
      keyword: "",
    };
  },

  mounted() {},

  methods: {
    //搜索按钮的回调函数：向search路由进行跳转
    goHome() {
      this.$router.push("/home");
    },
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
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="scss" scoped></style>
