import axios from '@/common/util/http';

import { userTranslator } from './translators'

export const getUserDetail = () => {
    return axios('/user/detail').then((data: any) => userTranslator(data));
}