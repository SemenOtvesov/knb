import { Tgame, Tuser } from '@js/types/state/user';
import { createSlice } from '@reduxjs/toolkit';

const initialState: { user: Tuser; token: string; game: Tgame; gameType: 'pending' | null } = {
    user: null,
    token: '',
    game: null,
    gameType: null,
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
        setGameType: (state, { payload }: { payload: 'pending' | null }) => {
            state.gameType = payload;
        },
        // setUserToken: (state, { payload }: { payload: string }) => {
        //     document.cookie = `usertoken=${payload}; path=/;`;
        //     state.token = payload;
        // },
    },
});

export const { setUser, setGame, setGameType } = userState.actions;

export default userState;
