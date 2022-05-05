@<template>
<div class="personal">
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="首页" name="1">首页</el-tab-pane>
  </el-tabs>
  <div class="head">
    <div class="avatar">
      <el-avatar :shape="circle" :src="ur"></el-avatar>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data(){
    return{
      ur:"@/assets/images/8.png",
    }
  },
}
</script>

<style>

</style>