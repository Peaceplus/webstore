@<template>
<div class="personal">
  <el-tabs type="border-card" v-model="activeName" @tab-click="handleClick" class="personalContainer">
    <el-tab-pane label="首页" name="1">
      <div class="head">
        <img src="@/assets/images/9.png">
    <div class="avatar">
      <el-avatar :shape="circle" :src="require('@/assets/' + ur)" :fit="fill" :size="100"></el-avatar>
    </div>
  </div>
    </el-tab-pane>
    <el-tab-pane label="消费记录" name="2"></el-tab-pane>
  </el-tabs>
</div>
</template>

<script>
export default {
  data(){
    return{
      activeName:"1",
      ur:'images/8.png',
    }
  },
  methods:{
    handleClick(tab,event){
      console.log(tab,event);
    }
  }
}
</script>

<style>

</style>