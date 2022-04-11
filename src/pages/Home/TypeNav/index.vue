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
      <div class="carouseldiagram">
              <a>
                <img v-for="(item,index) in viewList" :key="index" :src="require('@/assets/'+item)" v-show="timer == index" @mouseenter="clear" @mouseleave="change">
              </a>
              <span class="up-page" @click="turnpage('up')" @mouseenter="clear" @mouseleave="change"> &lt; </span>
                <span class="down-page" @click="turnpage('down')" @mouseenter="clear" @mouseleave="change">&gt;</span>
                <ul class="slide-index">
                  <li v-for="(x,y) in viewList" :key="y" :class="timer == y? 'active' :''" @click="page(y)" @mouseenter="clear" @mouseleave="change"></li>
                </ul>
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/css/home.css";
export default {
  name: "TypeNav",

  data:() =>({
    show_content: true,
    viewList:[
      "images/1.png",
      "images/2.png",
      "images/3.png",
    ],
    timer:0,
    interrupt:null
  }),

  mounted() {
    this.change()
  },

  methods: {
    change(){
      this.interrupt = setInterval(() => {
        this.timer++;
        if(this.timer == this.viewList.length){
          this.timer = 0;
        }
      },2000)
    },
    clear(){
      clearInterval(this.interrupt)
    },
    turnpage(str){
      if(str === 'up'){
        if(this.timer == 0){
          this.timer = this.viewList.length;
        }
        this.timer--;
      }
      else if(str === 'down'){
         this.timer++;
        if(this.timer == this.viewList.length){
          this.timer = 0;
        }
      }
    },
    page(str){
      this.timer = str;
    }
  }
};
</script>
<style lang="scss" scoped></style>
