<template>
  <div class="payContainer">
    <div class="payHeader">
      <el-page-header @back="goBack" content="支付页面"></el-page-header>
      <h3 style="margin-top:20px;">选择收货地址</h3>
      <el-table
        ref="addressTable"
        :data="addressData"
        style="width: 100%;margin-top: 20px"
      >
        <el-table-column label="选择" align="center" width="50">
          <template slot-scope="scope">
            <el-radio :label="scope.$index" v-model="radio" @change.native="getCurrentRow(scope.row)">&nbsp;</el-radio>
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
            <el-button class="iconfont icon-delete" type="text" @click="handleDelete(scope.$index)" style="color:#ff6700;font-size:14px">
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="tableBottom">
          <div class="table-buttonForm">
              <el-button type="text" class="iconfont icon-edit-square" @click="handleAdd" disabled>新增收货地址(未完成)</el-button>
          </div>
      </div>
      <h3  style="margin: 20px 0 0">选择付款方式</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pay",

  data() {
    return {
      templateSelection:{},
      radio: '',
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
    };
  },

  mounted() {},

  methods: {
    goBack() {
      this.$router.push("/cart");
    },
    handleAdd(index) {
      this.addressData.splice(index, 0, 1);
    },
    handleDelete(index) {
      this.addressData.splice(index, 1);
    },
    getCurrentRow(row){
      this.templateSelection = row;
      console.log(this.templateSelection)
    }
  },
};
</script>

<style lang="scss" scoped></style>
