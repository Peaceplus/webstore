<template>
  <div class="cart">
    <h4 class="cartTitle">我的购物车</h4>
    <div class="cartContainer">
      <el-table :data="productData" class="productTable">
        <el-table-column width="30">
          <template slot-scope="scope">
            <el-checkbox v-model="scope.row.checked"></el-checkbox>
          </template>
        </el-table-column>
        <el-table-column label="商品" width="180">
          <template slot-scope="scope">
            <i class="iconfont icon-shopping"></i>
            <el-image :src="scope.row.product"></el-image>
            <el-popover trigger="hover" placement="top">
              <p>名字：{{ scope.row.name }}</p>
              <p>介绍：{{ scope.row.info }}</p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.name }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="单价(元)" width="180">
          <template slot-scope="scope">{{ scope.row.price }} </template>
        </el-table-column>
        <el-table-column label="数量" width="180">
          <button href="javascript:;" class="num-reduce" @click="reduceNum">-</button>
            <input type="text" class="num-input" v-model="productNum">
            <button href="javascript:;" class="num-add" @click="addNum">+</button>
        </el-table-column>
        <el-table-column label="总计(元)" width="180">
          <template slot-scope="scope"
            >{{ scope.row.price * productNum }}
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="danger" @click="handleAdd(scope.$index)">
              增加
            </el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index)">
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="tableBottom">
        <el-button type="text" class="iconfont icon-delete" @click="deleteChose"
          >删除已选中商品</el-button
        >
        <el-button type="text" class="iconfont icon-shopping" @click="goShopping"
          >继续购物</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
  data() {
    return {
      productData: [
        {
          checked: false,
          product: "src/assets/images/5.png",
          name: "佳能相机",
          info: "佳能公司最早的产品之一",
          price: "5000.00",
          number: "1",
        },
        {
          checked: false,
          product: "src/assets/images/6.png",
          name: "威士忌",
          info: "来自前苏联的威士忌",
          price: "2000.00",
        },
        {
          checked: false,
          product: "src/assets/images/7.png",
          name: "ROG 笔记本电脑",
          info: "ROG出厂的笔记本电脑",
          price: "7299.00",
        },
      ],
      productNum:"1",
    };
  },

  methods: {
    handleAdd(index){
      this.productData.splice(index,0,1)
    },
    handleDelete(index) {
      this.productData.splice(index, 1);
    },
    reduceNum(){
      if(this.productNum >= 1){
        this.productNum--;
        }

    },
    addNum(){
      this.productNum++;
    },
    deleteChose(index) {
      this.productData = this.productData.filter(function (index) {
        return !index.checked;
      });
    },
    goShopping() {
      this.$router.push("/category");
    },
  },
};
</script>

<style lang="scss" scoped></style>
