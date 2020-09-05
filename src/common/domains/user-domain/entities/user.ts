/**
 * 用户类
 */
import { NEED_REMIND_VIP_LACK_DAYS, USER_TYPE_MAP } from '@/common/constants/user/index';
import dayjs from 'dayjs'

class User {
  private userInfo: userTranslatorType = {
    id: "",
    email: "",
    name: "",
    phoneNumber: "",
    type: 0,
    isVip: false,
    vipValidityDate: null,
    avatarUrl: ""
  }

  constructor(user: userTranslatorType)
  constructor()

  constructor(user?: userTranslatorType) {
    if (user)
    this.userInfo = {
      ...user,
      vipValidityDate: dayjs(user.vipValidityDate)
    }
  }

    // 获取剩余vip天数
    getVipRemainDays() {
        return this.userInfo.vipValidityDate.diff(new Date(), 'day');
    }

    // 是否需要提醒用户vip天数不足
    isNeedRemindUserVipLack() {
        return this.getVipRemainDays() <= NEED_REMIND_VIP_LACK_DAYS;
    }

    // 获取用户title
    getUserTypeTitle() {
        return this.userInfo.type && USER_TYPE_MAP[this.userInfo.type].title;
    }
}

export default User