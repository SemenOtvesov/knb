import { baseUrl } from '@js/constants/values';
import { TappDispatch } from '@js/state/store';
import { setGame, setGameType, setUser } from '@js/state/user/userState';
import { Tgame, Tuser } from '@js/types/state/user';
import axios from 'axios';
import { NavigateFunction } from 'react-router-dom';

export default async (dispatch: TappDispatch, navigate: NavigateFunction) => {
    // @ts-ignore: Unreachable code error
    dispatch(setGameType('pending'));
    const tg = window.Telegram.WebApp;
    const res = await axios
        .get<Tgame>(baseUrl + `/rps/startgame`, {
            headers: { initdata: `${tg.initData}` },
        })
        .then(res => {
            dispatch(setGameType(null));
            return res;
        })
        .catch(err => {
            dispatch(setGameType(null));
            return err;
        });
    const startTimestamp = +new Date(res.data.gameId.Start);
    if (startTimestamp - +new Date() < 0) {
        dispatch(setGame({ game: res.data, init: true }));
        navigate('/game');
    } else {
        setTimeout(() => {
            dispatch(setGame({ game: res.data, init: true }));
            navigate('/game');
        }, startTimestamp - +new Date());
    }

    return res.data;
};
