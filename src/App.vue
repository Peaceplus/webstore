<template>
  <div>
    <Header v-show="$route.meta.show_header"></Header>
    <Logo v-show="$route.meta.show_logo"></Logo>
    <SearchComponets v-show="$route.meta.show_search"></SearchComponets>
    <!-- 路由组件出口 -->
    <router-view></router-view>
    <Footer v-show="$route.meta.show_footer"></Footer>
  </div>
</template>

<script>
import Header from "./components/Header/index.vue";
import Logo from "./components/Logo/index.vue";
import SearchComponets from "./components/Search/index.vue";
import Footer from "./components/Footer/index.vue";
export default {
  name: "WebstoreApp",
  components: {
    Header,
    Logo,
    SearchComponets,
    Footer,
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
</style>