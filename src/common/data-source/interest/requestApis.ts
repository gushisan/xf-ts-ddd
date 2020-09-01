import axios from '@/common/util/http';

import { pointRecordTranslator, pointGiftTranslator } from './translators'

export const getUserPointCount = () => {
    return axios('/interest/point').then((res) => {
        return Number(res)
    })
}

export const getUserPointRecordList = () => {
    return axios('/interest/pointRecord').then((data: any) => {
        return data.map((item: ponitRecordListItem) => pointRecordTranslator(item));
    })
}

export const getInterestGiftList = () => {
    return axios('/interest/gift').then((data: any) => {
        return data.map((item: pointGiftListItem) => pointGiftTranslator(item))
    })
}