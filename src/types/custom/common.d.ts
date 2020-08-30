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