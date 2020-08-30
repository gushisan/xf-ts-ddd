const dayjs = require('dayjs');
const lotteryDetail = {
    code: 0,
    msg: '',
    data: {
        id: '8274',
        name: 'lottery name',
        lotteryType: 3,
        startDate: dayjs('2020-05-05').valueOf(),
        endDate: dayjs('2020-09-05').valueOf(),
    }
}

const lotteryPrizeList = {
    code: 0,
    msg: '',
    data: [
        {
            id: "1341",
            prizeName: '奖品名字1',
            type: 1,
            pic: '//qhstaticssl.kujiale.com/newt/35/image/jpeg/1561970467170/ADA31EAB0FA04012298BA9388189350A.jpg'
        },
        {
            id: "1541",
            prizeName: '奖品名字11',
            type: 2,
            pic: '//qhstaticssl.kujiale.com/newt/35/image/jpeg/1561970467170/ADA31EAB0FA04012298BA9388189350A.jpg'
        },
        {
            id: "1311",
            prizeName: '奖品名字12',
            type: 2,
            pic: '//qhstaticssl.kujiale.com/newt/35/image/jpeg/1561970467170/ADA31EAB0FA04012298BA9388189350A.jpg'
        },
        {
            id: "6341",
            prizeName: '奖品名字13',
            type: 1,
            pic: '//qhstaticssl.kujiale.com/newt/35/image/jpeg/1561970467170/ADA31EAB0FA04012298BA9388189350A.jpg'
        },
        {
            id: "1141",
            prizeName: '奖品名字14',
            type: 1,
            pic: '//qhstaticssl.kujiale.com/newt/35/image/jpeg/1561970467170/ADA31EAB0FA04012298BA9388189350A.jpg'
        },
        {
            id: "1391",
            prizeName: '奖品名字15',
            type: 2,
            pic: '//qhstaticssl.kujiale.com/newt/35/image/jpeg/1561970467170/ADA31EAB0FA04012298BA9388189350A.jpg'
        }
    ]
}

const playLotteryResult = {
    code: 0,
    msg: '',
    data: {
        recordId: '23212',
        prize: {
            id: "1391",
            prizeName: '奖品名字15',
            type: 2,
            pic: '//qhstaticssl.kujiale.com/newt/35/image/jpeg/1561970467170/ADA31EAB0FA04012298BA9388189350A.jpg'
        }
    }
}

const saveAddressResult = {
    code: 0,
    msg: '提交成功',
    data: {}
}

module.exports = {
    lotteryDetail,
    lotteryPrizeList,
    playLotteryResult,
    saveAddressResult
}