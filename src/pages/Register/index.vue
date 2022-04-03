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
      <el-form
        :model="regForm"
        status-icon
        :rules="rules"
        ref="regForm"
        label-width="100px"
        class="regForm"
      >
        <el-form-item label="用户名" prop="userName">
          <el-input
            type="text"
            v-model="regForm.userName"
            auto-complete="off"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <!-- <el-form-item label="邮箱" prop="mail">
          <el-input type="text" v-model="regForm.mail" auto-complete="off" placeholder="请输入邮箱"></el-input>
        </el-form-item> -->
        <el-form-item label="验证码" prop="canvas">
          <el-input
            type="text"
            v-model="regForm.canvas"
            auto-complete="off"
            placeholder="请输入验证码"
          >
          </el-input>
          <el-image src="../../assets/images/canvas.png"></el-image>
          <!-- <el-button round>发送验证码</el-button> -->
        </el-form-item>
        <el-form-item label="密码" prop="pwd">
          <el-input
            type="password"
            v-model="regForm.pwd"
            auto-complete="off"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPwd">
          <el-input
            type="password"
            v-model="regForm.checkPwd"
            auto-complete="off"
            placeholder="请再一次输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item prop="agreement">
          <el-checkbox
            label="同意协议"
            v-model="regForm.agreement"
            name="type"
            id="agreementCheck"
          >
          </el-checkbox>
          <el-button type="text" @click="dialogVisible = true">《用户协议》</el-button>
          <el-dialog
            title="《用户协议》"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose"
          >
            <span>本网站仅用于学习交流使用！</span>
            <span slot="footer" calss="dialog-footer">
              <el-button type="primary" @click="dialogVisible = false">同意</el-button>
            </span>
          </el-dialog>
        </el-form-item>
        <el-form-item>
          <el-button class="btn" @click="submitForm('regForm')">注册</el-button>
          <el-button @click="resetForm('regForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    // 用户名验证
    let usernamePattern = /^[a-zA-Z0-9_-]{4,16}$/;
    var validateUsername = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else if (!usernamePattern.test(value)) {
        callback(new Error("用户名应为4-16位由字母、数字、下划线或减号组成的字符"));
      }
    };
    // 验证码验证
    let canvas = "uwv6";
    var validateCanvas = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入验证码"));
      } else if (value != canvas) {
        callback(new Error("请输入正确的验证码"));
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
        if (this.regForm.checkPwd != "") {
          this.$refs.regForm.validateField("checkPwd");
        }
        callback();
      }
    };
    var validatePwd2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.regForm.pwd) {
        callback(new Error("两次输入密码不一致"));
      }
    };
    var validateAgreement = (rule, value, callback) => {};

    return {
      dialogVisible: false,
      regForm: {
        userName: "",
        canvas: "",
        pwd: "",
        checkPwd: "",
        agreement: "",
      },
      rules: {
        userName: [{ validator: validateUsername, trigger: "blur" }],
        canvas: [{ validator: validateCanvas, trigger: "blur" }],
        pwd: [{ validator: validatePwd, trigger: "blur" }],
        checkPwd: [{ validator: validatePwd2, trigger: "blur" }],
        agreement: [{ validator: validateAgreement, trigger: "blur" }],
      },
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("注册成功！");
        } else {
          alert("注册失败！");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style></style>
