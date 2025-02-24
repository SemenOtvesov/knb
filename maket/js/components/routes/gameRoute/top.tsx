import React from 'react';
import style from './style';
import { Tgame } from '@js/types/state/user';
import Counter from './counter';

// @ts-ignore: Unreachable code error
import IconCoin from '@maket/img/icon/cup.png';
// @ts-ignore: Unreachable code error
import baseAvatar from '@maket/img/icon/baseAvatar.png';

type Tprops = { game: Tgame; opponentCounter: 1 | 2 };

export default ({ game, opponentCounter }: Tprops) => {
    const { Top, PlayerName, Avatar, Rewards, BalanceIcon } = style();
    return (
        <Top>
            <PlayerName>{game?.gameId[`Player${opponentCounter}`].username}</PlayerName>
            <Avatar
                onLoad={e => {
                    if (e.target.width < 10) {
                        e.target.src = baseAvatar;
                    }
                }}
                onError={e => {
                    if (e.target.width < 10) {
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
};
