import dayjs from 'dayjs';

export const pointRecordTranslator = (data: ponitRecordListItem): pointRecordType => {
    return {
        id: data.id,
        description: data.title,
        type: data.type,
        spendPointValue: data.value,
        date: dayjs(data.date)
    }
}

export const pointGiftTranslator = (data: pointGiftListItem): pointGiftType => {
    return {
        id: data.id,
        name: data.name,
        type: data.type,
        needPointValue: data.value,
        mainPicUrl: data.pic,
        remainCount: data.count
    }
}