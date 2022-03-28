@
<template>
  <div class="header">
    <div class="regContainer">
      <!-- 注册表头 -->
      <h3>
        新用户注册
        <span class="goLogin">
          已有帐号，去
          <router-link to="/login"><a>登录</a></router-link>
        </span>
      </h3>
      <!-- 用户名 -->
      <div class="regContent">
        <label>用户名</label>
        <input type="text" autocomplete="off" placeholder="请输入用户名" maxlength="20" />
        <span class="errorMsg">请输入合法用户名</span>
      </div>
      <!-- 验证码 -->
      <div class="regContent">
        <label>验证码</label>
        <input type="text" autocomplete="off" placeholder="请输入验证码" />
        <!-- 生成验证码 -->

        <span class="errorMsg">验证码错误</span>
      </div>

      <!-- 密码 -->
      <div class="regContent">
        <label>密码</label>
        <input
          type="password"
          autocomplete="off"
          placeholder="请输入密码"
          maxlength="16"
        />
        <span class="errorMsg">请输入8-16位密码</span>
      </div>
      <div class="regContent">
        <label>确认密码</label>
        <input
          type="password"
          autocomplete="off"
          placeholder="请确认密码"
          maxlength="16"
        />
        <span class="errorMsg">密码与上一次输入不同，请重新输入</span>
      </div>
      <div class="regCheck">
        <input type="checkbox" />
        <span>同意协议并注册</span>
        <router-link to="">《用户注册协议》</router-link>
        <span class="errorMsg">未确认通过用户协议</span>
      </div>
      <div class="btn">
        <button>确认注册</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
