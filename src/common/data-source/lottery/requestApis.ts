import axios from '@/common/util/http';

import { LotteryTranslator, prizeTranslator } from './translators'

export const getLotteryDetail = (id: string|number) => {
    return axios(`/lottery/detail?id=${id}`).then((data: any) => LotteryTranslator(data))
}

export const getPrizeList = (id: string|number) => {
    return axios(`/lottery/prizeList?id=${id}`).then((data: any) => {
        return data.map((item: lotteryPrizeListItem) => prizeTranslator(item))
    })
}

export const playLottery = (id: string|number) => {
    return axios({
        method: 'post',
        url: '/lottery/play',
        data: {
            lotteryId: id
        }
    }).then((result: any) => {
        const { recordId, prize } = result;
        return {
            recordId,
            prize: prizeTranslator(prize) 
        }
    })
}

export const savePrizeAddress = (data: any) => {
    return axios({
        method: 'post',
        url: '/lottery/address',
        data: {
            obsRecord: data.recordId,
            name: data.name,
            mobile: data.phoneNumber,
            address: data.address
        }
    })
}