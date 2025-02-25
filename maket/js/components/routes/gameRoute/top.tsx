import React, { memo } from 'react';
import style from './style';
import Counter from './counter';

// @ts-ignore: Unreachable code error
import IconCoin from '@maket/img/icon/cup.png';
// @ts-ignore: Unreachable code error
import baseAvatar from '@maket/img/icon/baseAvatar.png';
import useAppSelector from '@js/hooks/useAppSelector';

export default memo(() => {
    let scrollWidth = Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.body.clientWidth,
        document.documentElement.clientWidth,
    );

    const { game, user } = useAppSelector(state => state.userState);
    const { Top, PlayerName, Avatar, Rewards, BalanceIcon } = style();
    const opponentCounter = game?.gameId.Player1Id == user?.userInfo.id ? 2 : 1;
    return (
        <Top>
            <PlayerName>{game?.gameId[`Player${opponentCounter}`].username}</PlayerName>
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
                src={`https://t.me/i/userpic/160/${game?.gameId[`Player${opponentCounter}`]
                    .username}.jpg`}
            ></Avatar>
            <Rewards>
                {game && game.gameId.Winner != undefined && game.gameId.Move1 != undefined
                    ? game?.gameId[`Player${opponentCounter}`].wins
                    : game?.gameId[`Player${opponentCounter}`].wins || 0 + 1}
                <BalanceIcon style={{ fontSize: '0.75em' }} alt="" src={IconCoin}></BalanceIcon>
            </Rewards>
            <Counter game={game} />
        </Top>
    );
});
