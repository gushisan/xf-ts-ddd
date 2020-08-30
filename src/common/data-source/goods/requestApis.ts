import axios from '@/common/util/http';
import { goodsTranslator } from './translators';

export const getGoodsList = () => {
    return axios('/goods/list').then((v: any)=>{
        return v.map((item: goodsListDataItem) => goodsTranslator(item))
    });
}