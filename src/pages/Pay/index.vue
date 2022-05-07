<template>
  <div class="payContainer">
    <div class="payHeader">
      <el-page-header @back="goBack" content="支付页面"></el-page-header>
      <el-table
        ref="addressTable"
        :data="addressData"
        @current-change="changeAddress"
        style="width: 100%"
      >
        <el-table-column type="index" width="50">
        </el-table-column>
        <el-table-column property="name" label="收件人" width="120">
          <template slot-scope="scope">
            {{ scope.row.name }}
          </template>
        </el-table-column>
        <el-table-column property="phoneNumber" label="联系方式" width="200">
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
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index)">
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
    </div>
  </div>
</template>

<script>
export default {
  name: "Pay",

  data() {
    return {
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
    changeAddress(deliveryAddress, row) {
      deliveryAddress = this.addressData.name;
      console.log(deliveryAddress);
      console.log(row);
    },
  },
};
</script>

<style lang="scss" scoped></style>
