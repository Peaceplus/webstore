<template>
  <div class="home-container">
    <div class="category-list">
      <ul>
        <li class="category-item">
          <a  name="dailyUse">
            生活用品
            <em class="iconfont icon-right-notfill"></em>
          </a>
        </li>
      </ul>
      <ul>
        <li class="category-item">
          <a  name="digital">
            数码产品
            <em class="iconfont icon-right-notfill"></em>
          </a>
        </li>
      </ul>
      <ul>
        <li class="category-item">
          <a  name="computer">
            电脑及配件
            <em class="iconfont icon-right-notfill"></em>
          </a>
        </li>
      </ul>
    </div>
    <div class="carouseldiagram">
      <a>
        <img
          v-for="(item, index) in viewList"
          :key="index"
          :src="require('@/assets/' + item)"
          v-show="timer == index"
          @mouseenter="clear"
          @mouseleave="change"
        >
      </a>
      <span
        class="up-page"
        @click="turnpage('up')"
        @mouseenter="clear"
        @mouseleave="change"
      >
        &lt;
      </span>
      <span
        class="down-page"
        @click="turnpage('down')"
        @mouseenter="clear"
        @mouseleave="change"
        >&gt;</span
      >
      <ul class="slide-index">
        <li
          v-for="(x, y) in viewList"
          :key="y"
          :class="timer == y ? 'active' : ''"
          @click="page(y)"
          @mouseenter="clear"
          @mouseleave="change"
        ></li>
      </ul>
    </div>
    <div class="recommend">
      <div class="image" v-for="(item, index) in imList" :key="index">
        <img :src="require('@/assets/' + item)" />
      </div>
      <div class="intro" v-for="i in inList" :key="i">
        <label>{{ i }}</label>
      </div>
      <div class="price" v-for="p in prList" :key="p">
        <label>{{ p }}</label>
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/css/home.css";
export default {
  name: "HomeItem",

  data: () => ({
    viewList: ["images/1.png", "images/2.png", "images/3.png"],
    imList: ["images/4.png", "images/5.png", "images/6.png", "images/7.png"],
    inList: [
      "LAVA智能手机",
      "松下G95/G90相机",
      "杰克丹尼威士忌",
      "ROG玩家国度笔记本电脑",
    ],
    prList: ["¥ 2999", "¥ 5999", "¥ 599", "¥ 12999"],
    timer: 0,
    interrupt: null,
  }),

  mounted() {
    this.change();
  },

  methods: {
    change() {
      this.interrupt = setInterval(() => {
        this.timer++;
        if (this.timer == this.viewList.length) {
          this.timer = 0;
        }
      }, 2000);
    },
    clear() {
      clearInterval(this.interrupt);
    },
    turnpage(str) {
      if (str === "up") {
        if (this.timer == 0) {
          this.timer = this.viewList.length;
        }
        this.timer--;
      } else if (str === "down") {
        this.timer++;
        if (this.timer == this.viewList.length) {
          this.timer = 0;
        }
      }
    },
    page(str) {
      this.timer = str;
    },
  },
};
</script>
<style lang="scss" scoped></style>
