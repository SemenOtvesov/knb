import React, { memo, useEffect, useState } from 'react';
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
import { useTonAddress, useTonConnectUI } from '@tonconnect/ui-react';
import addWallet from '@js/api/addWallet';
import useAppDispatch from '@js/hooks/useAppDispatch';

const header = memo(
    () => {
        const dispatch = useAppDispatch();
        const location = useLocation();
        const [tonConnectUI, setOptions] = useTonConnectUI();
        const userFriendlyAddress = useTonAddress();
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
        useEffect(() => {
            if (user?.userInfo.wallet == '' && userFriendlyAddress) {
                addWallet(dispatch, userFriendlyAddress);
            }
        }, [user, userFriendlyAddress]);

        if (location.pathname.includes('game') || location.pathname.includes('raiting')) {
            return <></>;
        }

        let scrollWidth = Math.max(
            document.body.scrollWidth,
            document.documentElement.scrollWidth,
            document.body.offsetWidth,
            document.documentElement.offsetWidth,
            document.body.clientWidth,
            document.documentElement.clientWidth,
        );
        return (
            <Container>
                <AvatarBox>
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
                        src={`https://t.me/i/userpic/160/${user?.userInfo.username}.jpg`}
                    ></Avatar>
                    <Name>{user ? user.userInfo.username : ''}</Name>
                    <Icon
                        onClick={() =>
                            userFriendlyAddress == '' &&
                            tonConnectUI.openModal().then(res => {
                                console.log(res);
                            })
                        }
                        style={{ width: '1.565em', height: '1.565em' }}
                        src={IconWallet}
                    />
                </AvatarBox>
                <BalanceBox>
                    <BalanceText>{user?.userInfo.daywins || 0}</BalanceText>
                    <BalanceValue>
                        {user ? user.coins : ''}
                        <BalanceIconBox>
                            <BalanceIcon alt="" src={IconCoin}></BalanceIcon>
                        </BalanceIconBox>
                    </BalanceValue>
                </BalanceBox>
            </Container>
        );
    },
    () => true,
);

export default header;
