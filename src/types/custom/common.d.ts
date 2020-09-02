// goods type
interface goodsListTag {
  type: number;
  title: string;
}

interface goodsListDataItem {
  id: string;
  goodsName: string;
  price: number;
  status: number;
  activityType: number;
  desc: string;
  brand: string;
  relatedModelId: string;
  mainPic: string;
  tag: goodsListTag[];
  relatedModelImg: null|string
}

interface goodsType {
  id: string;
    name: string;
    price: string;
    status: number;
    activityType: number;
    description: string;
    brandName: string;
    mainPicUrl: string;
    tags: goodsListTag[];
}
// interest type
interface ponitRecordListItem {
  id: string;
  title: string;
  type: number;
  value: number;
  date: number;
}

interface pointGiftListItem {
  id: string;
  name: string;
  type: number;
  value: number;
  pic: string;
  position: number;
  count: number;
}

interface pointRecordType {
  id: string;
  description: string;
  type: number;
  spendPointValue: number;
  date: dayjs.Dayjs;
}

interface pointGiftType {
  id: string;
  name: string;
  type: number;
  needPointValue: number;
  mainPicUrl: string;
  remainCount: number;
}

// lottery type
interface lotteryDetailType {
  id: string;
  name: string;
  lotteryType: number;
  startDate: number;
  endDate: number;
}

interface lotteryPrizeListItem {
  id: string;
  prizeName: string;
  type: number;
  pic: string;
}

interface LotteryType {
  id: string;
  name: string;
  type: number;
  startDate: dayjs.Dayjs|null;
  endDate: dayjs.Dayjs|null;
}

interface prizeType {
  id: string;
  name: string;
  type: number;
  mainPicUrl: string;
}

interface prizeAddressType {
  recordId: string,
  name: string,
  phoneNumber: string,
  address: string
}

// user type
interface userInfoType {
  userId: string;
  email: string;
  userName: string;
  tel: string;
  userType: number;
  vip: boolean;
  vipValidityDate: number;
  avatar: string;
}

interface userTranslatorType {
  id: string;
  email: string;
  name: string;
  phoneNumber: string;
  type: number;
  isVip: boolean;
  vipValidityDate: any;
  avatarUrl: string;
}