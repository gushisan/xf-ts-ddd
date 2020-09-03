<template>
  <div class="lottery-page">
    <h1>抽奖活动</h1>
    <div class="lottery-detail">
      <h3>抽奖详情</h3>
      <div class="name">活动名称: {{ lottery.lotteryData.name }}</div>
      <div>抽奖类型：{{ lottery.getLotteryType() }}</div>
      <div>时间: {{ lottery.getLotteryTimeScope() }}</div>
    </div>
    <div class="lottery-prize">
      <h3>奖品列表</h3>
      <div v-for="(prize, index) in prizeList" :key="index" class="prize-item">
        <div class="img-wrap">
          <img :src="prize.prizeData.mainPicUrl" alt="" />
        </div>
        <div class="prize-detail">
          <div class="name">
            <span v-if="prize.isSuperPrize()" class="super-prize">超级大奖</span>
            {{ prize.prizeData.name }}
          </div>
        </div>
      </div>
      <a-button type="danger" @click="handlePlayLottery">点击抽奖</a-button>
          
      <div v-if="isShowSaveAddressModal" class="save-address-modal">
        <div>收货地址填写</div>
        姓名：<input type="text" />
        手机：<input type="text" />
        地址：<input type="text" />
        <button @Click="handleSubmit">提交</button>
      </div>
    </div>
    <div class="user-info">
      <span>尊敬的{{ user.getUserTypeTitle() }}{{ user.userInfo.name }}</span>
      <div>您还剩余: {{ pointCount }} 分</div>
    </div>
    <a-modal
      title="中奖了"
      :visible="visible"
      @ok="handleOk"
      @cancel="visible = false"
    >
      <p>恭喜抽中超级大奖！！！</p>
    </a-modal>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { UserService, InterestService, LotteryService } from './services';
import User from '@/common/domains/user-domain/entities/user';
import Lottery from '@/common/domains/lottery-domain/entities/lottery'
import Prize from '@/common/domains/lottery-domain/entities/prize'

// 本次活动id
const LotteryId = '8274';

@Component
export default class LotteryPage extends Vue {
  private user: User = new User(null) // 个人信息
  private pointCount: number = 0 // 剩余积分
  private lottery: Lottery = new Lottery(null) // 抽奖活动详情
  private prizeList: any[] = [] // 奖品列表
  private recordId: string = '' // 中奖记录的id
  private gainPrize: Prize = new Prize(null) // 抽奖获得的的奖品
  private isShowSaveAddressModal: boolean = false // 是否展示地址编写modal
  private addressInfo: any = {} // 用户input地址信息
  private visible: boolean = false

  mounted() {
    this.initLottery();
    this.getUserInfo();
    this.getUserPointCount();
  }

  // 初始化抽奖
  async initLottery() {
    // 获取活动详情
    this.lottery = await LotteryService.getLotteryDetail(LotteryId)

    // 获取奖品列表
    this.prizeList = await LotteryService.getPrizeList(LotteryId)
  }

  // 获取用户信息
  async getUserInfo() {
    this.user = await UserService.getUserDetail()
  }

  // 获取用户积分
  async getUserPointCount() {
    this.pointCount = await InterestService.getUserPointCount()
  }

  handlePlayLottery() {
    console.log('123')
    this.visible = true
  }

  handleOk() {
    this.isShowSaveAddressModal = true
    this.visible = false
  }

  handleSubmit() {
    
  }
}
</script>
<style lang="less" scoped>
.lottery-page {
  img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
    border-radius: 20px;
  }
}
</style>