@
<template>
  <div class="loginContainer">
    <el-form
      :model="loginForm"
      status-icon
      :rules="rules"
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
      <el-form-item props="pwd">
        <label class="el-icon-lock"></label>
        <el-input
          type="password"
          v-model="loginForm.pwd"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="goHome">登录</el-button>
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
        pwd: "",
      },
      rules: {
        userName: [{ validator: validateUsername, trigger: "blur" }],
        pwd: [{ validator: validatePwd, trigger: "blur" }],
      },
    };
  },
  methods: {
    goRegister() {
      this.$router.push({
        path: "/register",
      });
    },
    goHome() {
      this.$router.push({
        path: "/home",
      });
    },
  },
};
</script>

<style></style>
