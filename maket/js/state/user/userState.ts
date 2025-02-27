import { Tgame, Tuser } from '@js/types/state/user';
import { createSlice } from '@reduxjs/toolkit';

const initialState: {
    user: Tuser;
    token: string;
    game: Tgame;
    gameType: 'pending' | null;
    requestGame: boolean;
} = {
    user: null,
    token: '',
    game: null,
    gameType: null,
    requestGame: false,
};

const userState = createSlice({
    name: 'userState',
    initialState,
    reducers: {
        setUser: (state, { payload }: { payload: Tuser }) => {
            state.user = payload;
        },
        setGame: (state, { payload }: { payload: { game: Tgame; init?: boolean } }) => {
            console.log(payload.game);
            if (payload?.init) {
                state.game = payload.game;
            } else {
                state.game = { game: { ...state.game?.game, ...payload?.game.game } };
            }
        },
        setWallet: (state, { payload }: { payload: string }) => {
            if (state.user) {
                state.user.userInfo.wallet = payload;
            }
        },
        setGameType: (state, { payload }: { payload: 'pending' | null }) => {
            state.gameType = payload;
        },
        setRequestGame: (state, { payload }: { payload: boolean }) => {
            state.requestGame = payload;
        },
        userUpdResultGame: (state, { payload }: { payload: Tgame }) => {
            if (state.user && payload?.game.Player1.id == state.user.userInfo.id) {
                state.user.userInfo.daywins = payload?.game.Player1.daywins;
            }
            if (state.user && payload?.game.Player2.id == state.user.userInfo.id) {
                state.user.userInfo.daywins = payload?.game.Player2.daywins;
            }
        },
    },
});

export const { setUser, setGame, setGameType, setRequestGame, setWallet, userUpdResultGame } =
    userState.actions;

export default userState;
