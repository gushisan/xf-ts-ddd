export const userTranslator = (data: userInfoType): userTranslatorType => {
  return {
      id: data.userId,
      email: data.email,
      name: data.userName,
      phoneNumber: data.tel,
      type: data.userType,
      isVip: data.vip,
      vipValidityDate: data.vipValidityDate,
      avatarUrl: data.avatar
  }
}