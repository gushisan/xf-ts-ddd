import dayjs from 'dayjs';


export const LotteryTranslator = (data: lotteryDetailType) => {
    return {
        id: data.id,
        name: data.name,
        type: data.lotteryType,
        startDate: dayjs(data.startDate),
        endDate: dayjs(data.endDate)
    }
}

export const prizeTranslator = (data: lotteryPrizeListItem) => {
    return {
        id: data.id,
        name: data.prizeName,
        type: data.type,
        mainPicUrl: data.pic
    }
}
