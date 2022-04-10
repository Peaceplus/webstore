@
<template>
  <div class="bottom">
    <div class="logoArea">
      <router-link class="logoImg" to="/home">
        <img src="../../assets/images/logo.png" alt="logo" />
      </router-link>
      <div class="loginContainer">
        <el-form
          :model="loginForm"
          status-icon
          :rules="rules"
          ref="loginForm"
          label-width="100px"
          class="loginForm"
        >
          <el-form-item label="用户名" props="userName">
            <el-input
              type="text"
              v-model="loginForm.userName"
              placeholder="请输入用户名"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码" props="pwd">
            <el-input
              type="password"
              v-model="loginForm.pwd"
              placeholder="请输入密码"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="goHome">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/css/home.css";
export default {
  data(){
    // 用户名后端检验
    var validateUsername=(rule, value,callback)=>{
      callback()
    }
    // 密码后端检验
    var validatePwd=(rule,value,callback)=>{
      callback()
    }
    return{
    loginForm:{
      userName: "",
      pwd: ""
    },
    rules:{
      userName:[{validator:validateUsername, trigger:"blur"}],
      pwd:[{validator:validatePwd, trigger:"blur"}]
    }
  }

  },
  methods:{
    goHome(){
      this.$router.push({
        path: "/home",
      });
    }
  }
};
</script>

<style></style>
