import { baseUrl } from '@js/constants/values';
import { TappDispatch } from '@js/state/store';
import { setUser } from '@js/state/user/userState';
import { Tuser } from '@js/types/state/user';
import axios from 'axios';

export default async (dispatch: TappDispatch) => {
    // @ts-ignore: Unreachable code error
    const tg = window.Telegram.WebApp;
    const res = await axios.post<Tuser>(
        baseUrl + '/rps/adduser',
        {},
        {
            headers: { initdata: `${tg.initData}` },
        },
    );
    dispatch(setUser(res.data));
    return res.data;
};
