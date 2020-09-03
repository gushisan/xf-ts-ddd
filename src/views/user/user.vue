<template>
  <div class="user-page">
    <h1>个人中心</h1>
    <img :class="user.userInfo.isVip ? 'vip' : ''" :src="user.userInfo.avatarUrl" />
    <div>尊敬的{{ user.getUserTypeTitle() }}：{{ user.userInfo.name }}</div>
    <div>手机号： {{ user.userInfo.phoneNumber }}</div>
    <div>电子邮箱： {{ user.userInfo.email }}</div>
   
    <div v-if="user.userInfo.isVip">会员还有{{ user.getVipRemainDays() }}天</div>
  
 

    <div class="lottery-tips">
      <div>剩余积分：{{ pointCount }} 分</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { UserService, InterestService } from "./services";
import User from "@/common/domains/user-domain/entities/user";
import { SIGN_USER_TYPE } from "@/common/constants/user/index";

@Component
export default class UserPage extends Vue {
  private pointCount: number | null = null;
  private user: User = new User(null);
  private signUserType: number = SIGN_USER_TYPE;

  mounted() {
    this.getUserInfo();
    this.getUserPonitCount();
  }

  // 获取用户信息
  async getUserInfo() {
    const user = await UserService.getUserDetail();
    this.user = user;
    console.log(user.getVipRemainDays());
  }

  async getUserPonitCount() {
    const pointCount = await InterestService.getUserPointCount();
    this.pointCount = pointCount;
    console.log(pointCount);
  }
}
</script>
<style lang="less" scoped>
.user-page {
  img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
    border-radius: 20px;
  }
}
</style>
