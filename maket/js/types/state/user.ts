export type Tuser = {
    userInfo: {
        id: number;
        wallet: string;
        wins: number;
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
    gameId: {
        id: number;
        Player1Id: number;
        Player2Id: number;
        Player1UserName: string;
        Player2UserName: string;
        Start: string;
        End: string;

        Move1: string;
        Move2: string;
        Winner: number;
    };
} | null;
