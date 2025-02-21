import React, { useState } from 'react';
import style from './style';

// @ts-ignore: Unreachable code error
import IconCoin from '@maket/img/icon/cup.png';
// @ts-ignore: Unreachable code error
import IconWallet from '@maket/img/icon/wallet.svg';
import useAppSelector from '@js/hooks/useAppSelector';
// @ts-ignore: Unreachable code error
import baseAvatar from '@maket/img/icon/baseAvatar.png';
import Icon from '@js/components/microComponets/icon';
import { useLocation } from 'react-router-dom';

const header = () => {
    const location = useLocation();
    const {
        Container,
        Avatar,
        Name,
        AvatarBox,
        BalanceBox,
        BalanceText,
        BalanceValue,
        BalanceIcon,
        WalletIcon,
        BalanceIconBox,
    } = style();

    const user = useAppSelector(state => state.userState.user);
    if (location.pathname.includes('game') || location.pathname.includes('reiting')) {
        return <></>;
    }
    return (
        <Container>
            <AvatarBox>
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
                    src={`https://t.me/i/userpic/160/${user?.userInfo.username}.jpg`}
                ></Avatar>
                <Name>{user ? user.userInfo.username : ''}</Name>
                <Icon style={{ width: '1.565em', height: '1.565em' }} src={IconWallet} />
            </AvatarBox>
            <BalanceBox>
                <BalanceText>{user?.userInfo.wins || 0}</BalanceText>
                <BalanceValue>
                    {user ? user.coins : ''}
                    <BalanceIconBox>
                        <BalanceIcon alt="" src={IconCoin}></BalanceIcon>
                    </BalanceIconBox>
                </BalanceValue>
            </BalanceBox>
        </Container>
    );
};

export default header;
