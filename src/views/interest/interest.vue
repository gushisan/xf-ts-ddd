<template>
  <div class="home">
    <h1>积分中心</h1>
    <div>尊敬的{{ user.getUserTypeTitle() }}{{ user.userInfo.name }}</div>
    <div>剩余积分： {{ remainPoint }}</div>
    <h3>积分记录</h3>
    <div v-for="(record, index) in pointRecordList" :key="index" class="point-record">
      <span>{{ record.getDaysFromNow() }} 天前：</span>
      <span>{{ record.pointRecordData.description }}</span>
      <span> {{ record.isSpendPoint() ? '消耗' : '获得' }}</span>
      <span>{{ record.pointRecordData.spendPointValue }}积分</span>
    </div>
    <h3>积分兑换</h3>
    <div v-for="(gift, index) in interestGiftList" :key="index*10+10" class="point-exchange">
      <div class="img-wrap">
        <img :src="gift.pointGiftData.mainPicUrl" />
        <a-tag v-if="gift.isNeedVip()" color="pink" class="vip-exchange">会员可兑换</a-tag>
      </div>
      <div class="gift-detail">
        <div>{{ gift.pointGiftData.name }}</div>
        <div>消耗{{ gift.pointGiftData.needPointValue }}积分</div>
                
        <div v-if="gift.isOutStock()">等待补货</div>
        <div v-else>剩余{{ gift.pointGiftData.remainCount }}件</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { UserService, InterestService } from './services'
import User from "@/common/domains/user-domain/entities/user";

@Component
export default class Interest extends Vue {
  private remainPoint: number =  0 // 剩余积分
  private pointRecordList: any[] = [] // 积分记录列表
  private interestGiftList: any[] = [] // 积分礼品列表
  private user: User = new User(null) // 个人信息

  mounted() {
    this.getUserPointCount();
    this.getUserPointRecordList();
    this.getInterestGiftList();
    this.getUserInfo();
  }

  // 获取剩余积分
  async getUserPointCount() {
    this.remainPoint = await InterestService.getUserPointCount()
  }

  // 获取积分记录列表
  async getUserPointRecordList() {
    this.pointRecordList = await InterestService.getPointRecordList()
  }

  // 获取权益积分列表
  async getInterestGiftList() {
    this.interestGiftList = await InterestService.getInterestGiftList()
  }

  // 获取个人信息
  async getUserInfo() {
    this.user = await UserService.getUserDetail()
  }
  
}
</script>

<style lang="less" scoped>
.img-wrap {
  img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
    border-radius: 20px;
  }
}
</style>
