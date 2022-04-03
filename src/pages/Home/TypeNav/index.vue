<template>
  <div class="type-nav">
    <div class="container">
      <div class="classify">
        <button @click="show_content = !show_content">商品分类</button>
        <div class="content">
          <el-collapse-transition>
            <div v-show="show_content">
              <a href="#">手机</a>
              <a href="#">数码</a>
              <a href="#">食品酒饮</a>
              <a href="#">家具厨具</a>
              <a href="#">电脑办公</a>
              <a href="#">个护清洁</a>
              <a href="#">母婴童装</a>
              <a href="#">服饰</a>
              <a href="#">运动户外</a>
              <a href="#">家具家装</a>
              <a href="#">医疗保健</a>
              <a href="#">美妆护肤</a>
              <a href="#">奢侈品</a>
            </div>
          </el-collapse-transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/css/home.css";
export default {
  name: "TypeNav",

  data:() =>({
    show_content: true
  }),

  mounted() {},

  methods: {},
};
</script>
<style lang="scss" scoped></style>
