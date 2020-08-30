const dayjs = require('dayjs');

const userInfo = {
    code: 0,
    msg: '',
    data: {
        userId: '2323',
        email: 'gushisan857@gmail.com',
        userName: 'gushisan',
        tel: '15999999999',
        userType: 2,
        vip: true,
        vipValidityDate: dayjs('2020-08-27').valueOf(),
        avatar: 'https://qhyxpicoss.kujiale.com/avatars/58.jpg'
    }
}

module.exports = {
    userInfo
}