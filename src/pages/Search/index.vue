@
<template>
  <div class="sortContainer">
    <div class="sortHead">
      <button class="sort">所有商品</button>
    </div>
    <div class="sortBreadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>所有分类</el-breadcrumb-item>
        <el-breadcrumb-item>
          <el-tag
          v-for="tag in tags"
          :key="tag.name"
          closable
          :type="tag.type">{{tag.name}}</el-tag>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-collapse v-model="activeNames" @change="handleChange" class="sortTable">
      <el-collapse-item name="1" title="品牌">
      <el-link :underline="false">小米XIAOMI</el-link>
      <el-link :underline="false">华为HUAWEI</el-link>
      <el-link :underline="false">APPLE</el-link>
      <el-link :underline="false">真我REALME</el-link>
      </el-collapse-item>
    </el-collapse>

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
      tags:[
        {name:'小米XIAOMI',type:'info'},
        {name:'华为HUAWEI',type:'info'},
        {name:'APPLE',type:'info'}
        ],
    };
  },
  methods:{
    handleChange(val){
      console.log(val);
    }

  }
};
</script>

<style></style>
