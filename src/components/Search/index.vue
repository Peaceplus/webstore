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
        <el-submenu index="2">
          <template slot="title">服饰</template>
          <el-menu-item index="2-1">服装</el-menu-item>
          <el-menu-item index="2-2">鞋</el-menu-item>
          <el-menu-item index="2-3">配饰</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">食品</template>
          <el-menu-item index="3-1">速食</el-menu-item>
          <el-menu-item index="3-2">粮油调味</el-menu-item>
          <el-menu-item index="3-3">饮品</el-menu-item>
          <el-menu-item index="3-4">零食</el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">图书影像</template>
          <el-menu-item index="4-1">文学作品</el-menu-item>
          <el-menu-item index="4-2">教育考试</el-menu-item>
          <el-menu-item index="4-3">艺术生活</el-menu-item>
          <el-menu-item index="4-4">科技经济</el-menu-item>
          <el-menu-item index="4-5">儿童</el-menu-item>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">运动户外</template>
          <el-menu-item index="5-1">运动鞋包</el-menu-item>
          <el-menu-item index="5-2">运动服饰</el-menu-item>
          <el-menu-item index="5-3">户外装备</el-menu-item>
          <el-menu-item index="5-4">健身训练</el-menu-item>
          <el-menu-item index="5-5">体育用品</el-menu-item>
        </el-submenu>
        <el-submenu index="6">
          <template slot="title">数码</template>
          <el-menu-item index="6-1">摄影摄像</el-menu-item>
          <el-menu-item index="6-2">影音娱乐</el-menu-item>
          <el-menu-item index="6-3">数码配件</el-menu-item>
          <el-menu-item index="6-4">智能设备</el-menu-item>
        </el-submenu>
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
