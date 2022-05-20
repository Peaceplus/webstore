@<template>
<div class="personal">
  <el-tabs type="border-card" v-model="activeName" @tab-click="handleClick" class="personalContainer">
    <el-tab-pane label="首页" name="1">
      <div class="head">
        <img src="@/assets/images/9.png">
      </div>
      <el-upload
        class="avatar-uploader"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="require('@/assets/' + imageUrl)" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <div class="profile">
          <label class="pro">个人信息</label>
          <el-input v-model="input1" type="text" placeholder="用户ID" maxlength="6" show-word-limit></el-input>
          <el-input v-model="input2" type="text" placeholder="用户名" maxlength="10" show-word-limit></el-input>
          <el-input v-model="input3" type="text" placeholder="邮箱"><template slot="append">@qq.com</template></el-input>
          <el-input v-model="input4" type="text" placeholder="地址" maxlength="50" show-word-limit></el-input>
          <el-input v-model="input5" type="text" placeholder="手机" maxlength="11" show-word-limit></el-input>
          <div class="changePro">
          <el-button type="primary" size="medium" round>修改信息</el-button>
          <el-button type="primary" size="medium" round>保存</el-button>
          </div>
        </div>
    </el-tab-pane>
    <el-tab-pane label="消费记录" name="2">
      <el-table
      :data="Log"
      border="true"
      style="width:100%">
      <el-table-column prop="good" label="商品" width="320"></el-table-column>
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="number" label="数量" width="80"></el-table-column>
      <el-table-column prop="price" label="金额" width="180"></el-table-column>
      <el-table-column prop="address" label="地址" width="408"></el-table-column>
      </el-table>
    </el-tab-pane>
  </el-tabs>
</div>
</template>

<script>
export default {
  data(){
    return{
      activeName:"1",
      imageUrl: 'images/8.jpg',
      input1:'',
      input2:'',
      input3:'',
      input4:'',
      input5:'',
      Log: [{
            good:'DDD',
            date: '2022-05-02',
            number:'1',
            price: '999',
            address: '成都市郫都区百叶路1号电子科技大学成都学院'
          }, {
            good:'DDD',
            date: '2022-05-04',
            number:'1',
            price: '999',
            address: '成都市郫都区百叶路1号电子科技大学成都学院'
          }, {
            good:'DDD',
            date: '2022-05-01',
            number:'1',
            price: '999',
            address: '成都市郫都区百叶路1号电子科技大学成都学院'
          },{
            good:'DDD',
            date: '2022-05-01',
            number:'1',
            price: '999',
            address: '成都市郫都区百叶路1号电子科技大学成都学院'
          },]
    }
  },
  methods:{
    handleClick(tab,event){
      console.log(tab,event);
    },
    handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
   }
  }
}
</script>

<style>

</style>