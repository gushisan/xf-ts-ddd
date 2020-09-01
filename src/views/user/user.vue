<template>
  <div class="home">
    <h1>个人中心</h1>
    <div class="user">
      <div class="info">
        <div>尊敬的{{ user.getUserTypeTitle() }}：{{ user.userInfo.name }}</div>
        <div>绑定手机号： {{ user.userInfo.phoneNumber }}</div>
        <div>绑定email： {{ user.userInfo.email }}</div>
      </div>
      <div class="avatar">
        <img :class="user.userInfo.isVip ? 'vip' : ''" :src="user.userInfo.avatarUrl" />
        <div v-if="user.userInfo.isVip">会员还有{{ user.getVipRemainDays() }}天</div>
      </div>
    </div>

    <div class="lottery-tips">
      <div>剩余积分：{{ pointCount }} 分</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { UserService, InterestService } from "./services";
import user from "@/common/domains/user-domain/entities/user";
import { SIGN_USER_TYPE } from "@/common/constants/user/index";
const userData: userTranslatorType = {
  id: "",
  email: "",
  name: "",
  phoneNumber: "",
  type: 0,
  isVip: false,
  vipValidityDate: null,
  avatarUrl: ""
};
@Component
export default class User extends Vue {
  private pointCount: number | null = null;
  private user: user = new user(userData);
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
<style scoped>
</style>
