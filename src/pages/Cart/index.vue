<template>
  <div class="cart">
    <h4 class="cartTitle">我的购物车</h4>
    <div class="cartContainer">
      <el-table :data="productData" class="productTable">
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
          <template slot-scope="scope">{{scope.row.price}} </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">
              添加
            </el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
            >
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="productForm"></div>
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
          product: "src/assets/images/5.png",
          name: "佳能相机",
          info: "佳能公司最早的产品之一",
          price: "5000.00"
        },
        {
          product: "src/assets/images/6.png",
          name: "伏特加",
          info: "来自前苏联的伏特加",
          price: "2000.00"
        },
        {
          product: "src/assets/images/7.png",
          name: "ROG 笔记本电脑",
          info: "ROG出厂的笔记本电脑",
          price: "7299.00"
        },
      ],
    };
  },

  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
  },
};
</script>

<style lang="scss" scoped></style>
