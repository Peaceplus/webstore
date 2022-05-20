<template>
  <div class="product">
    <div class="productContainer">
      <div class="imgBox">
        <div class="top">
          <el-image
            class="img"
            v-if="index == 0"
            :src="url"
            :preview-src-list="srcList"
          ></el-image>
          <el-image
            class="img"
            v-if="index == 1"
            :src="url"
            :preview-src-list="srcList"
          ></el-image>
          <el-image
            class="img"
            v-if="index == 2"
            :src="url"
            :preview-src-list="srcList"
          ></el-image>
        </div>
        <div class="bottom">
          <img
            class="img"
            index="0"
            @mouseover="checkImg(0)"
            src="../../assets/images/product/clothes_1_1.jpg"
          />
          <img
            class="img"
            index="1"
            @mouseover="checkImg(1)"
            src="../../assets/images/product/clothes_1_2.jpg"
          />
          <img
            class="img"
            index="2"
            @mouseover="checkImg(2)"
            src="../../assets/images/product/clothes_1_3.jpg"
          />
        </div>
      </div>
      <div class="rightBox">
        <div class="title">
          <h3>{{ productBand + "&nbsp;" + productName }}</h3>
        </div>
        <div class="meta">
          <div class="originPrice">
            <span class="type">原价</span>
            <span>￥</span>
            <span style="text-decoration: line-through">980.00</span>
          </div>
          <div class="price">
            <span class="type">价格</span><em>￥{{ price.toFixed(2) }}</em>
          </div>
          <div class="style">
            <span class="type">款式</span>
            <img
              class="img"
              :class="{ 'img-selected': style == '深蓝色' }"
              @click="style = '深蓝色'"
              src="../../assets/images/product/clothes_1_1.jpg"
            />
            <img
              class="img"
              :class="{ 'img-selected': style == '黑色' }"
              @click="style = '黑色'"
              src="../../assets/images/product/clothes_1_2.jpg"
            />
            <img
              class="img"
              :class="{ 'img-selected': style == '卡其色' }"
              @click="style = '卡其色'"
              src="../../assets/images/product/clothes_1_3.jpg"
            />
          </div>
          <div class="size">
            <span class="type">尺寸</span>
            <button
              class="checkSize"
              @click="size = 'XS'"
              :class="{ 'size-selected': size == 'XS' }"
            >
              XS
            </button>
            <button
              class="checkSize"
              @click="size = 'S'"
              :class="{ 'size-selected': size == 'S' }"
            >
              S
            </button>
            <button
              class="checkSize"
              @click="size = 'M'"
              :class="{ 'size-selected': size == 'M' }"
            >
              M
            </button>
            <button
              class="checkSize"
              @click="size = 'L'"
              :class="{ 'size-selected': size == 'L' }"
            >
              L
            </button>
            <button
              class="checkSize"
              @click="size = 'XL'"
              :class="{ 'size-selected': size == 'XL' }"
            >
              XL
            </button>
            <button
              class="checkSize"
              @click="size = 'XXL'"
              :class="{ 'size-selected': size == 'XXL' }"
            >
              XXL
            </button>
          </div>
          <div class="number">
            <ul>
              <li class="type">数量</li>
              <li>
                <button href="javascript:;" @click="minus(count)" class="num-reduce">
                  <span class="iconfont icon-minus"></span>
                </button>
              </li>
              <li>
                <input
                  type="text"
                  v-model="count"
                  value="1"
                  maxlength="8"
                  class="num-input"
                />
              </li>
              <li>
                <button href="javascript:;" @click="add(count)" class="num-add">
                  <span class="iconfont icon-plus"></span></button
                >&nbsp;件
              </li>
            </ul>
          </div>
        </div>
        <div class="action">
          <button class="buy">立即购买</button>
          <button class="addCart">
            <span class="iconfont icon-cart">加入购物车</span>
          </button>
        </div>
      </div>
    </div>
    <div class="line"></div>
    <div class="description">
      <el-descriptions title="商品信息">
        <el-descriptions-item label="商品名">{{ productName }}</el-descriptions-item>
        <el-descriptions-item label="品牌">{{ productBand }}</el-descriptions-item>
        <el-descriptions-item label="商品介绍">{{
          productDescription
        }}</el-descriptions-item>
        <el-descriptions-item label="颜色">{{ productStyle }}</el-descriptions-item>
        <el-descriptions-item label="尺码">{{ productSize }}</el-descriptions-item>
      </el-descriptions>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",

  data() {
    return {
      url: require("../../assets/images/product/clothes_1_1.jpg"),
      index: 0,
      isimgprimary: -1,
      productName: "男士经典款防水防风外套/夹克/风衣",
      productBand: "Timberland/添柏岚",
      productDescription: "适用于秋冬季节穿搭的美式休闲外套",
      productStyle: "深蓝色 黑色 卡其色 ",
      productSize: "XS S M L XL XXL",
      style: "深蓝色",
      size: "M",
      price: 926.1,
      count: 1,
      srcList: [
        //预览列表
        require("../../assets/images/product/clothes_1_1.jpg"),
        require("../../assets/images/product/clothes_1_2.jpg"),
        require("../../assets/images/product/clothes_1_3.jpg"),
      ],
    };
  },
  methods: {
    checkImg(i) {
      this.index = i;
      this.url = require("../../assets/images/product/clothes_1_" + (i + 1) + ".jpg");
    },
    minus(count) {
      if (this.count <= 0) {
        alert("宝贝不能再减少了！");
        this.count = 0;
      } else {
        this.count -= 1;
      }
    },
    add(count) {
      if (this.count < 3) {
        this.count++;
      } else {
        alert("每人最多限购3件哦！");
        this.count = 3;
      }
    },
    checkType(index) {
      this.isimgprimary = index;
    },
  },
};
</script>

<style lang="scss" scoped></style>
