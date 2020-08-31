/**
 * 抽奖活动实体
 */
import dayjs from 'dayjs'
import { lotteryTypeMap } from '@/common/constants/lottery/index'
class Lottery {
  private lotteryData: LotteryType
    constructor(data: LotteryType) {
      this.lotteryData = data
    }
    // 获取活动时间范围
    getLotteryTimeScope() {
        return `${dayjs(this.lotteryData.startDate).format("M月D日")} - ${dayjs(this.lotteryData.endDate).format("M月D日")}`
    }

    // 获取活动类型描述
    getLotteryType() {
        return this.lotteryData.type && lotteryTypeMap[this.lotteryData.type].title
    }
}

export default Lottery