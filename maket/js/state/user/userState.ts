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
        setGame: (state, { payload }: { payload: Tgame }) => {
            state.game = payload;
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
    },
});

export const { setUser, setGame, setGameType, setRequestGame, setWallet } = userState.actions;

export default userState;
