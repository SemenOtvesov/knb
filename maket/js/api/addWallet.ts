import { baseUrl } from '@js/constants/values';
import { TappDispatch } from '@js/state/store';
import { setGame, setGameType, setRequestGame, setUser, setWallet } from '@js/state/user/userState';
import { Tgame, Tuser } from '@js/types/state/user';
import axios from 'axios';
import { NavigateFunction } from 'react-router-dom';

export default async (dispatch: TappDispatch, wallet: string) => {
    dispatch(setRequestGame(true));
    // @ts-ignore: Unreachable code error
    const tg = window.Telegram.WebApp;
    await axios
        .post<string>(
            baseUrl + `/rps/addwallet`,
            { wallet: wallet },
            {
                headers: { initdata: `${tg.initData}` },
            },
        )
        .then(res => {
            if (res.data.includes('sucsess')) {
                dispatch(setWallet('sucsess'));
            }
        });
};
