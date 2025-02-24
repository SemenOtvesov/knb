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
            state.game = { gameId: { ...state.game?.gameId, ...payload?.gameId } };
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
            if (state.user && payload?.gameId.Player1.id == state.user.userInfo.id) {
                state.user.userInfo.wins = payload?.gameId.Player1.wins;
            }
            if (state.user && payload?.gameId.Player2.id == state.user.userInfo.id) {
                state.user.userInfo.wins = payload?.gameId.Player2.wins;
            }
        },
    },
});

export const { setUser, setGame, setGameType, setRequestGame, setWallet, userUpdResultGame } =
    userState.actions;

export default userState;
