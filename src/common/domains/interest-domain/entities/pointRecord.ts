/**
 * 积分记录类
 */
import dayjs from 'dayjs';
import { SPEND_POINT_TYPE } from '@/common/constants/interest/index';

class PointRecord {
  private pointRecordData: pointRecordType
    constructor(data: pointRecordType) {
      this.pointRecordData = data
    }

    // 获取记录时间距离今天的天数
    getDaysFromNow() {
      return dayjs(new Date()).diff(this.pointRecordData.date, 'day')
    }

    // 是否为获得积分，否则为消耗积分
    isSpendPoint() {
        return this.pointRecordData.type === SPEND_POINT_TYPE
    }
}

export default PointRecord