<template>
  <div class="account-container">
    <vue-particles
      class="login-bg"
      color="#999"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="4"
      linesColor="#999"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance  ="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles>
    <el-tabs
      type="border-card"
      v-model="ariaSelected"
      @tab-click="handleClick"
      class="form"
    >
      <el-tab-pane label="登录" name="login">
        <el-form
          :model="loginForm"
          status-icon
          ref="loginForm"
          label-position="left"
          label-width="25px"
          size="medium"
          class="loginForm"
        >
          <el-form-item prop="userName">
            <label class="iconfont icon-user"></label>
            <el-input
              type="text"
              v-model="loginForm.userName"
              placeholder="请输入用户名"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <label class="iconfont icon-lock"></label>
            <el-input
              type="password"
              v-model="loginForm.password"
              placeholder="请输入密码"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm()">登录</el-button>
          </el-form-item>
        </el-form>

        <el-drawer
          title="网上商城用户协议"
          :visible.sync="drawer"
          direction="ttb"
        >
          <span>本网站仅用于学习交流使用！</span>
        </el-drawer>
      </el-tab-pane>
      <el-tab-pane label="注册" name="register">
        <el-form
          :model="regForm"
          status-icon
          :rules="rules"
          ref="regForm"
          label-position="left"
          label-width="25px"
          size="medium"
          class="regForm"
        >
          <el-form-item prop="userName">
            <label class="iconfont icon-user"></label>
            <el-input
              type="text"
              v-model="regForm.userName"
              auto-complete="off"
              placeholder="请输入用户名"
            ></el-input>
          </el-form-item>

          <el-form-item prop="password">
            <label class="iconfont icon-lock"></label>
            <el-input
              type="password"
              v-model="regForm.password"
              auto-complete="off"
              placeholder="请输入密码"
            ></el-input>
          </el-form-item>
          <el-form-item prop="checkPassword">
            <label class="iconfont icon-lock-fill"></label>
            <el-input
              type="password"
              v-model="regForm.checkPassword"
              auto-complete="off"
              placeholder="请再一次输入密码"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="addShopUser()">注册</el-button>
            <el-button @click="resetForm()">重置</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import "@/assets/css/home.css";
import "element-ui/lib/theme-chalk/index.css";
export default {
  name: "account",
  data() {
    // 用户名后端检验
    var validateUsername = (rule, value, callback) => {
      callback();
    };
    // 密码后端检验
    var validatePwd = (rule, value, callback) => {
      callback();
    };
    // 用户名验证
    let usernamePattern = /^[a-zA-Z0-9_-]{4,16}$/;
    var validateUsername = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else if (!usernamePattern.test(value)) {
        callback(
          new Error("用户名应为4-16位由字母、数字、下划线或减号组成的字符")
        );
      } else {
        callback();
      }
    };
    // 密码验证
    let pwdPattern = /^(?=.*[0-9])(?=.*[a-zA-Z])[0-9A-Za-z~!@#$%^&*._?]{8,15}$/;
    var validatePwd = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (!pwdPattern.test(value)) {
        callback(
          new Error(
            "密码必须包括数字、字母两种字符，(特殊字符仅包括：~!@#$%^&*._?)长度在8-15位之间"
          )
        );
      } else {
        if (this.regForm.checkPassword != "") {
          this.$refs.regForm.validateField("checkPassword");
        }
        callback();
      }
    };
    var validatePwd2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.regForm.password) {
        callback(new Error("两次输入密码不一致"));
      } else {
        callback();
      }
    };
    return {
      checked: false,
      drawer: false,
      ariaSelected: "login",
      loginForm: {
        userName: "",
        password: "",
      },
      dialogVisible: false,
      regForm: {
        userName: "",
        password: "",
        checkPassword: "",
      },
      rules: {
        userName: [
          { required: true, validator: validateUsername, trigger: "blur" },
        ],
        password: [{ required: true, validator: validatePwd, trigger: "blur" }],
        checkPassword: [
          { required: true, validator: validatePwd2, trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    submitForm() {
      let _this = this;
      // 使用 axios 将登录信息发送到后端
      this.axios({
        url: "http://localhost:8888/webstore/login", // 请求地址
        method: "post", // 请求方法
        headers: {
          // 请求头
          "Content-Type": "application/json",
        },
        params: {
          // 请求参数
          username: _this.loginForm.userName,
          password: _this.loginForm.password,
        },
      }).then((res) => {
        // 当收到后端的响应时执行该括号内的代码，res 为响应信息，也就是后端返回的信息
        if (res.data.data === "login-success") {
          // 当响应的data为 login-success 时，说明登录成功
          // 将用户信息存储到sessionStorage中
          localStorage.setItem("userName", _this.loginForm.userName);
          this.username=true;
          // 显示后端响应的成功信息
          this.$message({
            message: "登录成功",
            type: "success",
          });
          this.goHome();
        } else {
          // 当响应的编码不为 login-success 时，说明登录失败
          // 显示后端响应的失败信息
          this.$message.error("登录失败");
        }
        // 不管响应成功还是失败，收到后端响应的消息后就不再让登录按钮显示加载动画了
        this.loading = false;
      });
    },
    addShopUser() {
      let _this = this;
      this.axios({
        // axios 向后端发起请求
        url: "http://localhost:8888/webstore/add_shop_user", // 请求地址
        method: "post", // 请求方法
        headers: {
          // 请求头
          "Content-Type": "application/json",
        },
        params: {
          // 请求参数，为 data，与登录的 params 不太一样
          username: _this.regForm.userName,
          password: _this.regForm.password,
          checkPassword: _this.regForm.checkPassword,
        },
      }).then((res) => {
        // 当收到后端的响应时执行该括号内的代码，res 为响应信息，也就是后端返回的信息
        if (res.data.data == "register-success") {
          // 当响应的编码为 register-success 时，说明注册成功
          // 显示后端响应的成功信息
          this.$message({
            message: "注册成功",
            type: "success",
          });
          this.reFresh();
          this.dialogRegVisible = false;
        } else {
          // 当响应的编码不为 register-success 时，说明注册失败
          // 显示后端响应的失败信息
          this.$message.error("注册失败");
        }
        // 不管响应成功还是失败，收到后端响应的消息后就不再让登录按钮显示加载动画了
        this.loading = false;
      });
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    goHome(){
      this.$router.push('/home');
      this.$router.go(0);
    },
    reFresh(){
      this.$router.go(0);
    },
    resetForm(regForm) {
      this.$refs[regForm].resetFields();
    },
    dialog() {
      this.dialogVisible = true;
    },
    agreement() {
      this.dialogVisible = false;
      this.regForm.type = true;
    },
  },
};
</script>

<style></style>
