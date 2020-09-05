<template>
  <div class="home">
    <h1>DDD商城</h1>
    <div class="user">
      <img :class="user.userInfo.isVip ? 'vip' : ''" :src="user.userInfo.avatarUrl" />
      <span>尊敬的{{ user.getUserTypeTitle() }}{{ user.userInfo.name }}</span>

      <h3>商品列表</h3>
      <div v-for="(goods, index) in goodsList" :key="index" class="goods-item">
        <div class="main-info">
          <div>
            <img :src="goods.goodsData.mainPicUrl" />
            <span>{{ goods.goodsData.name }}</span>
          </div>
          <a-tag v-if="goods.isOutStock()" color="#f50">已无货</a-tag>
        </div>
        <div class="detail-info">
          <span
            v-if="goods.isDiscountGoods()"
          >特价：{{ goods.goodsData.price }} 元</span>
          <span v-else>价格：{{ goods.goodsData.price }} 元</span>
          <div>
            <a-tag v-for="(v, idx) in goods.getShowInListTags()" :key="idx" color="pink" class="tag">{{ v.title }}</a-tag>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { UserService, GoodsService } from "./services";
import User from "@/common/domains/user-domain/entities/user";
// eslint-disable-next-line no-unused-vars
import Goods from '@/common/domains/goods-domain/entities/goods';

@Component
export default class Home extends Vue {
  private user: User = new User();
  private goodsList: Goods[] = [];

  mounted() {
    this.init();
  }

  async init() {
    this.goodsList = await GoodsService.getGoodsList();
    this.user = await UserService.getUserDetail();
  }
}
</script>
<style lang="less" scoped>
.user {
  padding-bottom: 80px;
  img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
    border-radius: 20px;
  }
  .vip {
    border: 5px solid red;
  }
  .goods-item {
    width: 100%;
    height: 80px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    .main-info {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 20px;
    }
    .detail-info {
      text-align: start;
      padding: 0 20px 0 60px;
    }
  }
}
</style>
