<template>
  <div class="bottom">
    <div class="logoArea">
      <router-link class="logoImg" to="/home">
        <img src="../../assets/images/logo.png" alt="logo" />
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
</template>

<script>
import "@/assets/css/home.css";
export default {
  name: "SearchComponets",

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

<style lang="scss" scoped></style>
