@
<template>
  <div class="header">
    <div class="regContainer">
      <!-- 注册表头 -->
      <h3>新用户注册</h3>
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
        <el-form-item label="验证码" prop="canvas">
          <el-input
            type="text"
            v-model="regForm.canvas"
            auto-complete="off"
            placeholder="请输入验证码"
          ></el-input>
          <input
            type="button"
            @click="createCode"
            autocomplete="off"
            class="verification"
            v-model="checkCode"
          />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model="regForm.password"
            auto-complete="off"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPassword">
          <el-input
            type="password"
            v-model="regForm.checkPassword"
            auto-complete="off"
            placeholder="请再一次输入密码"
          ></el-input>
        </el-form-item>
        <!-- <el-form-item prop="type">
          <el-checkbox label="同意协议" v-model="regForm.type" name="type"></el-checkbox>
          <el-button type="text" @click="dialog">《用户协议》</el-button>
          <el-dialog
            title="《用户协议》"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose"
          >
            <span>本网站仅用于学习交流使用！</span>
            <span slot="footer" calss="dialog-footer">
              <el-button type="primary" @click="agreement">同意</el-button>
            </span>
          </el-dialog>
        </el-form-item> -->
        <el-form-item>
          <el-button @click="submitForm('regForm')">注册</el-button>
          <el-button @click="resetForm('regForm')">重置</el-button>
        </el-form-item>
        <el-form-item>
          <el-link class="goLogin" @click="goLogin">已有帐号？立即登录</el-link>
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
      } else {
        callback();
      }
    };
    // 验证码验证
    var validateCanvas = (rule, value, callback) => {
      value = value.toUpperCase();
      if (value === "") {
        callback(new Error("请输入验证码"));
      } else if (value != this.checkCode) {
        callback(new Error("请输入正确的验证码"));
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
      dialogVisible: false,
      regForm: {
        userName: "",
        canvas: "",
        code: "",
        checkCode: "",
        password: "",
        checkPassword: "",
        // type: "",
      },
      rules: {
        userName: [{ required: true, validator: validateUsername, trigger: "blur" }],
        canvas: [{ required: true, validator: validateCanvas, trigger: "blur" }],
        password: [{ required: true, validator: validatePwd, trigger: "blur" }],
        checkPassword: [{ required: true, validator: validatePwd2, trigger: "blur" }],
        // type: [
        //   {
        //     type: "array",
        //     required: true,
        //     message: "请勾选并同意用户协议",
        //     trigger: "change",
        //   },
        // ],
      },
    };
  },
  created() {
    this.createCode();
  },
  methods: {
    goLogin() {
      this.$router.push({
        path: "/login",
      });
    },
    // 图形验证码
    createCode() {
      // 初始化
      this.code = "";
      this.checkCode = "";
      this.canvas = "";
      // 验证码长度
      const codeLength = 4;
      // 随机生成
      const random = new Array(
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        "A",
        "a",
        "B",
        "b",
        "C",
        "c",
        "D",
        "d",
        "E",
        "e",
        "F",
        "f",
        "G",
        "g",
        "H",
        "h",
        "I",
        "i",
        "J",
        "j",
        "K",
        "k",
        "L",
        "l",
        "M",
        "m",
        "N",
        "n",
        "O",
        "o",
        "P",
        "p",
        "Q",
        "q",
        "R",
        "r",
        "S",
        "s",
        "T",
        "t",
        "U",
        "u",
        "V",
        "v",
        "W",
        "w",
        "X",
        "x",
        "Y",
        "y",
        "Z",
        "z"
      );
      for (let i = 0; i < codeLength; i++) {
        // 取得随机数索引(0~35)
        let index = Math.floor(Math.random() * 36);
        // 根据索引取得随机数,加到code中
        this.code += random[index];
      }
      // 将code值赋给验证码
      this.checkCode = this.code;
      this.checkCode = this.checkCode.toUpperCase();
    },

    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    submitForm(regForm) {
      this.$refs[regForm].validate((valid) => {
        if (valid) {
          //两次密码相同
          if(this.regForm.password == this.regForm.checkPassword){
            //获取数据，判断用户名是否已存在
            let info=JSON.parse(localStorage.getItem('Info'))
            console.log(info)
            //存在info数组时，立即开始内部if-else判断，无则else
            if(info){
              //若存在用户名，则返回用户名已存在
              if(info[this.regForm.name]){
                alert("用户名已存在")
              }else{
                //若没有则添加
                //对象[(键)变量] = 值
                info[this.regForm.name]=this.regForm.password
                this.$router.push('/login')
              }
            }else{
              //没有info时，新建info对象
              info={[this.regForm.name]:this.regForm.password}
              this.$router.push('/login')
            }
            // 存储数据
            localStorage.setItem('Info', JSON.stringify(info))
          }else{
            alert('密码不一致')
          }
        }else{
          console.log('error submit!')
          return false
        }
      });
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
