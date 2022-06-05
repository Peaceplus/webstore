<template>
  <div class="paySuccess">
    <div class="success">
      <h3>
        <img src="@/assets/images/right.png" width="48" height="48" />
        恭喜您，支付成功！
      </h3>
      <div class="paydetail">
        <el-button class="iconfont icon-rollback" @click="goHome">继续购物</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaySuccess",

  data() {
    return {};
  },

  mounted() {},

  methods: {
      goHome(){
          this.$router.push("/home");
      }
  },
};
</script>

<style lang="scss" scoped></style>
