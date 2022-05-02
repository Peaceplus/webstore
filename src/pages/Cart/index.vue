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
        <el-table-column label="商品" width="300">
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
          <template slot-scope="scope">￥{{ scope.row.price }} </template>
        </el-table-column>
        <el-table-column label="数量" width="180">
          <template slot-scope="scope">
            <button
              href="javascript:;"
              class="num-reduce"
              @click="scope.row.number > 0 ? scope.row.number-- : ''"
            >
              -
            </button>
            <input type="text" class="num-input" v-model="scope.row.number" />
            <button href="javascript:;" class="num-add" @click="scope.row.number++">
              +
            </button>
          </template>
        </el-table-column>
        <el-table-column label="总计(元)" width="180">
          <template slot-scope="scope">
            ￥{{ scope.row.price * scope.row.number }}
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <!-- <el-button size="mini" type="danger" @click="handleAdd(scope.$index)">
              增加
            </el-button> -->
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index)">
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="tableBottom">
        <div class="table-buttonForm">
          <el-button type="text" class="iconfont icon-delete" @click="deleteChose"
            >删除已选中商品</el-button
          >
          <el-button type="text" class="iconfont icon-shopping" @click="goShopping"
            >继续购物</el-button
          >
        </div>

        <div class="table-totalForm">
          <span style="color: #e94826">{{ getTotal.totalNum }}</span>
          件商品总计（不含运费）：
          <span style="color: #e94826; margin-right: 20px"
            >￥{{ getTotal.totalPrice }}</span
          >
          <el-button><span style="color: #fefefe">结算</span></el-button>
        </div>
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
          number: "1",
        },
        {
          checked: false,
          product: "src/assets/images/7.png",
          name: "ROG 笔记本电脑",
          info: "ROG出厂的笔记本电脑",
          price: "7299.00",
          number: "1",
        },
      ],
    };
  },
  computed: {
    getTotal() {
      // 获取productList中select为true的数据
      var productData = this.productData.filter(function (val) {
        return val.checked;
      });
      // 设置一个值用来存储总价
      var totalPrice = 0;
      for (let i = 0; i < productData.length; i++) {
        // 将每个商品的总价加在一起
        totalPrice += productData[i].number * productData[i].price;
      }
      return {
        // 被选中的物品数量就是proList.length
        totalNum: productData.length,
        // 总价就是totalPrice
        totalPrice: totalPrice,
      };
    },
  },
  methods: {
    handleAdd(index) {
      this.productData.splice(index, 0, 1);
    },
    handleDelete(index) {
      this.productData.splice(index, 1);
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
