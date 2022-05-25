<template>
  <div class="outer">
    <div class="home-container">
      <div class="carouseldiagram">
        <a>
          <img
            v-for="(item, index) in viewList"
            :key="index"
            :src="require('@/assets/' + item)"
            v-show="timer == index"
            @mouseenter="clear"
            @mouseleave="change"
          />
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
         <div class="recommendContainer">
           <div class="image" v-for="pic in pics" :key="pic.id">
            <img class="img" :src="require('@/assets/' + pic.image)" @click="goProduct">
            <label>{{ pic.info }}</label><br>
            <label class="price">{{ pic.price }}</label>
      </div>
    </div>
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
    pics: [{id:"1",
                image:"images/clothes_1_1.png",
                info:"Timberland/添柏岚 男士防水防风外套",
                price:"¥ 926.10",
               },
               {id:"2",
                image:"images/5.png",
                info:"松下G95/G90相机",
                price:"¥ 5999",
               },
               {id:"3",
                image:"images/6.png",
                info:"杰克丹尼威士忌",
                price:"¥ 599",
               },
               {id:"4",
                image:"images/7.png",
                info:"ROG玩家国度笔记本电脑",
                price:"¥ 12999",
               },
                {id:"5",
                image:"images/4.png",
                info:"LAVA智能手机",
                price:"¥ 2999",
               },
                {id:"5",
                image:"images/4.png",
                info:"LAVA智能手机",
                price:"¥ 2999",
               },
                {id:"5",
                image:"images/4.png",
                info:"LAVA智能手机",
                price:"¥ 2999",
               },
                {id:"5",
                image:"images/4.png",
                info:"LAVA智能手机",
                price:"¥ 2999",
               },
        ],
    timer: 0,
    interrupt: null,
  }),

  mounted() {
    this.change();
  },

  methods: {
    goCategory() {
      this.$router.push("/category");
    },
    goProduct(){
      this.$router.push("/product");
    },
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
