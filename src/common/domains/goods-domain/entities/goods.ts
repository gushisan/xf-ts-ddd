/**
 * 商品类
 */
import { OUT_STACK_STATUS, SHOW_IN_LIST_TAG_TYPE, DISCOUNT_ACTIVITY_TYPE } from '@/common/constants/goods/index';

export default class Goods {
  private goodsData: goodsType
  constructor(data: goodsType) {
    this.goodsData = {
      ...data
    }
  }

  isOutStock() {
    return this.goodsData.status && this.goodsData.status === OUT_STACK_STATUS;
  }

  isDiscountGoods() {
    return this.goodsData.activityType === DISCOUNT_ACTIVITY_TYPE;
  }

  getShowInListTags() {
    return this.goodsData.tags.filter(v=> v.type === SHOW_IN_LIST_TAG_TYPE);
  }
}