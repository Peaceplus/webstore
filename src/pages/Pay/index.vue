<template>
  <div class="payContainer">
    <div class="payHeader">
      <el-page-header @back="goBack" content="支付页面"></el-page-header>
    </div>
    <h3 style="margin-top: 20px">订单详情</h3>

    <h3 style="margin-top: 20px">选择收货地址</h3>
    <el-table
      ref="addressTable"
      :data="addressData"
      style="width: 100%; margin-top: 20px"
    >
      <el-table-column label="选择" align="center" width="50">
        <template slot-scope="scope">
          <el-radio
            :label="scope.$index"
            v-model="radio"
            @change.native="getCurrentRow(scope.row)"
            >&nbsp;</el-radio
          >
        </template>
      </el-table-column>
      <el-table-column property="name" align="center" label="收件人" width="100">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column property="phoneNumber" label="联系方式" width="150">
        <template slot-scope="scope">
          {{ scope.row.phoneNumber }}
        </template>
      </el-table-column>
      <el-table-column property="address" label="地址" width="600">
        <template slot-scope="scope">
          {{ scope.row.address }}
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            class="iconfont icon-delete"
            type="text"
            @click="handleDelete(scope.$index)"
            style="color: #ff6700; font-size: 14px"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="tableBottom">
      <div class="table-buttonForm">
        <el-button
          type="text"
          class="iconfont icon-edit-square"
          @click="handleAdd"
          disabled
          >新增收货地址(未完成)</el-button
        >
      </div>
    </div>
    <h3 style="margin: 20px 0 0">支付方式</h3>
    <div class="payMode">
      <div class="payModeForm">
        <el-radio-group v-model="payRadio">
          <el-radio-button label="支付宝支付">
            <svg class="iconfont" aria-hidden="true" style="width: 20px; height: 20px">
              <use xlink:href="#icon-alipay"></use>
            </svg>
            支付宝支付
          </el-radio-button>
          <el-radio-button label="微信支付">
            <svg class="iconfont" aria-hidden="true" style="width: 20px; height: 20px">
              <use xlink:href="#icon-wechatpay"></use>
            </svg>
            微信支付
          </el-radio-button>
        </el-radio-group>
      </div>
    </div>
    <div class="payPrice">
      支付金额：￥<em>{{ payPrice }}</em>
    </div>
    <div class="payBottom">
      <el-button type="primary" class="iconfont icon-wallet" @click="onSubmit">立即支付</el-button>
      <el-button class="iconfont icon-rollback" @click="goHome">返回首页</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pay",

  data() {
    return {
      templateSelection: {},
      radio: "",
      addressData: [
        {
          name: "张三",
          phoneNumber: "12345678901",
          address: "四川省成都市郫都区合作街道百叶路一号电子科技大学成都学院",
        },
        {
          name: "李四",
          phoneNumber: "23456789012",
          address: "四川省成都市郫都区合作街道百叶路一号电子科技大学成都学院",
        },
      ],
      currentRow: null,
      payRadio: "支付宝支付",
      payPrice: "14299.00",
    };
  },

  mounted() {
  },

  methods: {
    goBack() {
      this.$router.push("/cart");
    },
    goHome(){
      this.$router.push("/home");
    },
    handleAdd(index) {
      this.addressData.splice(index, 0, 1);
    },
    handleDelete(index) {
      this.addressData.splice(index, 1);
    },
    getCurrentRow(row) {
      this.templateSelection = row; //获取选中行的所有参数，获取指定参数使用' .xxx '
    },
    onSubmit(){
      this.$router.push('/paySuccess');
      if(this.payRadio == "支付宝支付"){
        //支付宝支付
      }else if(this.payRadio == "微信支付"){
        //微信支付
      }
    }
  },
};
</script>

<style lang="scss" scoped></style>
