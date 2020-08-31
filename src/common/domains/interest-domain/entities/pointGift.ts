/**
 * 积分奖品类
 */

import { IS_NEED_VIP_GIFT_TYPE } from '@/common/constants/interest/index';

class PointGift {
    private pointGiftData: pointGiftType
    constructor(data: pointGiftType) {
      this.pointGiftData = data
    }

    // 是否为 vip
    isNeedVip() {
        return this.pointGiftData.type === IS_NEED_VIP_GIFT_TYPE
    }

    // 是否缺货
    isOutStock() {
        return this.pointGiftData.remainCount <= 0;
    }
}

export default PointGift;