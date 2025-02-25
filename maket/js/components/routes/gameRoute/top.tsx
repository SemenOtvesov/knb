import React, { memo, useEffect, useState } from 'react';
import style from './style';
import Counter from './counter';

// @ts-ignore: Unreachable code error
import IconCoin from '@maket/img/icon/cup.png';
// @ts-ignore: Unreachable code error
import baseAvatar from '@maket/img/icon/baseAvatar.png';
import useAppSelector from '@js/hooks/useAppSelector';
import { Tgame } from '@js/types/state/user';

let username = '';
const AvatarL = memo(
    () => {
        const { Avatar } = style();
        let scrollWidth = Math.max(
            document.body.scrollWidth,
            document.documentElement.scrollWidth,
            document.body.offsetWidth,
            document.documentElement.offsetWidth,
            document.body.clientWidth,
            document.documentElement.clientWidth,
        );
        const [renderGen, setrenderGen] = useState('');
        console.log(username, !username);
        useEffect(() => {
            console.log(username, !username);
            if (!username) {
                const int = setInterval(() => {
                    if (username) {
                        clearInterval(int);
                        setrenderGen(username);
                    } else {
                        setrenderGen(p => p + '1');
                    }
                }, 50);
            } else {
                setrenderGen(username);
            }
        });
        return (
            <Avatar
                onLoad={e => {
                    if (e.target.width < scrollWidth * 0.13) {
                        e.target.src = baseAvatar;
                    }
                }}
                onError={e => {
                    if (e.target.width < scrollWidth * 0.13) {
                        e.target.src = baseAvatar;
                    }
                }}
                src={`https://t.me/i/userpic/160/${renderGen}.jpg`}
            ></Avatar>
        );
    },
    () => true,
);

export default memo(
    () => {
        const { Top } = style();

        return (
            <Top>
                <PlayerNameC />
                <AvatarL />
                <RewardsC />
            </Top>
        );
    },
    () => true,
);

function PlayerNameC() {
    const { PlayerName } = style();
    const { game, user } = useAppSelector(state => state.userState);
    const opponentCounter = game?.gameId.Player1Id == user?.userInfo.id ? 2 : 1;

    useEffect(() => {
        username = game?.gameId[`Player${opponentCounter}`].username;
    }, [game]);

    return <PlayerName>{game?.gameId[`Player${opponentCounter}`].username}</PlayerName>;
}
function RewardsC() {
    const { Rewards, BalanceIcon } = style();
    const { game, user } = useAppSelector(state => state.userState);
    const opponentCounter = game?.gameId.Player1Id == user?.userInfo.id ? 2 : 1;

    return (
        <>
            <Rewards>
                {game && game.gameId.Winner != undefined && game.gameId.Move1 != undefined
                    ? game?.gameId[`Player${opponentCounter}`].wins
                    : game?.gameId[`Player${opponentCounter}`].wins || 0 + 1}
                <BalanceIcon style={{ fontSize: '0.75em' }} alt="" src={IconCoin}></BalanceIcon>
            </Rewards>
            <Counter game={game} />
        </>
    );
}
