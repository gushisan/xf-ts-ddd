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
        vipValidityDate: dayjs('2021-08-27').valueOf(),
        avatar: 'https://user-gold-cdn.xitu.io/2020/6/8/17292c7cb0927ff6?imageView2/1/w/180/h/180/q/85/format/webp/interlace/1'
    }
}

module.exports = {
    userInfo
}