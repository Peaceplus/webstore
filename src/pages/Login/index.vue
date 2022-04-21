@
<template>
  <div class="loginContainer">
    <el-form
      :model="loginForm"
      status-icon
      ref="loginForm"
      label-position="left"
      label-width="25px"
      size="medium"
      class="loginForm"
    >
      <h2>用户登录</h2>
      <el-form-item props="userName">
        <label class="el-icon-user"></label>
        <el-input
          type="text"
          v-model="loginForm.userName"
          placeholder="请输入用户名"
        ></el-input>
      </el-form-item>
      <el-form-item props="password">
        <label class="el-icon-lock"></label>
        <el-input
          type="password"
          v-model="loginForm.password"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(loginForm)">登录</el-button>
      </el-form-item>
      <el-form-item>
        <el-link class="goRegister" @click="goRegister">没有帐号？立即注册</el-link>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import "@/assets/css/home.css";
export default {
  data() {
    // 用户名后端检验
    var validateUsername = (rule, value, callback) => {
      callback();
    };
    // 密码后端检验
    var validatePwd = (rule, value, callback) => {
      callback();
    };
    return {
      loginForm: {
        userName: "",
        password: "",
      },
    };
  },
  methods: {
    submitForm(loginForm){
      this.$refs.loginForm.validate((valid) => {
        if(valid){
          let info = JSON.parse(localStorage.getItem('Info'))
          if(info[this.loginForm.name]){
            if(this.loginForm.password == info[this.loginForm.name]){
              let userName = this.loginForm.name;
              localStorage.setItem('userName', userName)
              this.$router.push('/home')
              window.location.reload()
            }else{
              alert('密码错误，请检查用户名或密码是否正确');
            }
          }else{
            alert('用户名不存在，请检查用户名');
          }
        }else{
          console.log('error submit!');
          return false;
        }
      });
    },
    goRegister() {
      this.$router.push({
        path: "/register",
      });
    }
  },
};
</script>

<style></style>
