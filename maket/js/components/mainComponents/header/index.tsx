import React, { useState } from 'react';
import style from './style';

// @ts-ignore: Unreachable code error
import IconCoin from '@maket/img/icon/cup.svg';
// @ts-ignore: Unreachable code error
import IconWallet from '@maket/img/icon/wallet.svg';
import useAppSelector from '@js/hooks/useAppSelector';
import useAppDispatch from '@js/hooks/useAppDispatch';
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
                <Avatar src={`https://t.me/i/userpic/160/${user?.userInfo.username}.jpg`}></Avatar>
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
