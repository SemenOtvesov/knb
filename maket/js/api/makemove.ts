import { baseUrl } from '@js/constants/values';
import { TappDispatch } from '@js/state/store';
import {
    setGame,
    setGameType,
    setRequestGame,
    setUser,
    userUpdResultGame,
} from '@js/state/user/userState';
import { Tgame, Tuser } from '@js/types/state/user';
import axios from 'axios';
import { NavigateFunction } from 'react-router-dom';

export default async (
    dispatch: TappDispatch,
    gameid: number,
    move: 'rock' | 'paper' | 'scissors',
) => {
    dispatch(setRequestGame(true));
    // @ts-ignore: Unreachable code error
    const tg = window.Telegram.WebApp;
    const res = await axios.post<Tgame>(
        baseUrl + `/rps/makemove/${gameid}`,
        { move: move },
        {
            headers: { initdata: `${tg.initData}` },
        },
    );

    const endTimestamp = +new Date(res.data.Result.End);
    if (endTimestamp - +new Date() < 0) {
        dispatch(setGame({ game: { game: res.data.Result } }));
        dispatch(userUpdResultGame({ game: res.data.Result }));
        dispatch(setRequestGame(false));
    } else {
        setTimeout(() => {
            dispatch(setGame({ game: { game: res.data.Result } }));
            dispatch(userUpdResultGame({ game: res.data.Result }));
            dispatch(setRequestGame(false));
        }, endTimestamp - +new Date());
    }
    return res.data;
};
