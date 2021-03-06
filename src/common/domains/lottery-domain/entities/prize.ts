/**
 * 奖品实体
 */
import { SUPER_PRIZE_TYPE } from '@/common/constants/lottery/index';

class Prize {
  private prizeData: prizeType = {
    id: '',
    name: '',
    type: 0,
    mainPicUrl: '',
  }

  constructor(data: prizeType)
  constructor()

  constructor(data?: prizeType) {
    if (data)
    this.prizeData = data
  }

  isSuperPrize() {
      return this.prizeData.type === SUPER_PRIZE_TYPE;
  }
}


export default Prize