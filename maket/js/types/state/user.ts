export type Tuser = {
    userInfo: {
        id: number;
        wallet: string;
        wins: number;
        daywins: number;
        username: string;
        draws: number;
        games: number;
    };
    dayRainting: Array<{
        userid: number;
        wins: number;
        username: string;
    }>;
} | null;

export type Tgame = {
    game: {
        id: number;
        Player1Id: number;
        Player2Id: number;
        Player1: Tplayer;
        Player2: Tplayer;
        Start: string;
        End: string;

        Move1: string;
        Move2: string;
        Winner: number;
    };
} | null;

export type Tplayer = {
    id: number;
    wallet: string;
    wins: number;
    daywins: number;
    username: string;
    draws: number;
    games: number;
};
