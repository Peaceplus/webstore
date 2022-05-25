@
<template>
  <div class="sortContainer">
    <div class="sortHead">
      <button class="sort">所有商品</button>
    </div>
    <div class="sortBreadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>所有分类</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-collapse v-model="activeNames" @change="handleChange" class="sortTable">
      <el-collapse-item name="1" title="品牌">
      <el-link :underline="false" v-for="i in brands" :key="i">{{i.brand}}</el-link>
      </el-collapse-item>
    </el-collapse>
  <div class="goodContainer">
    <div class="showContainer">
      <div class="image" v-for="pic in pics" :key="pic.id">
            <img class="img" :src="require('@/assets/' + pic.image)">
            <label>{{ pic.info }}</label><br>
            <label class="price">{{ pic.price }}</label>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import "@/assets/css/search.css";
export default {
   name: "Search",
  //路由组件可以传递props
  // props:['keyword']
  data(){
    return{
      activeNames:['1'],
        brands:[
          {
            brand:"小米XIAOMI",
          },
          {
            brand:"华为HUAWEI",
          },
          {
            brand:"APPLE",
          },
          {
            brand:"真我REALME",
          },
        ],
        pics: [{id:"1",
                image:"images/product/clothes_1_1.jpg",
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
        ]};
  },
  methods:{
    handleChange(val){
      console.log(val);
    }

  }
};
</script>

<style></style>
