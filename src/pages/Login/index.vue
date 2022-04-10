@
<template>
  <div class="bottom">
    <div class="logoArea">
      <router-link class="logoImg" to="/home">
        <img src="../../assets/images/logo.png" alt="logo" />
      </router-link>
      <div class="loginContainer">
        <el-form :model="loginForm" status-icon="">
          <el-form-item label=""></el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/css/home.css";
export default {};
</script>

<style></style>
