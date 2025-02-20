import React from 'react';
import style from './style';

// @ts-ignore: Unreachable code error
import IconCoin from '@maket/img/icon/cup.svg';

import { openAllert } from '@js/components/mainComponents/fn/allert';
import { inviteUrl } from '@js/constants/values';
import { TappDispatch } from '@js/state/store';
import useAppDispatch from '@js/hooks/useAppDispatch';

export default () => {
    const dispatch = useAppDispatch();
    const {
        Container,
        Title,
        TextBox,
        Text,
        TextPlug,
        Raiting,
        RaitingItem,
        RaitingItemLeft,
        RaitingItemAvatar,
        RaitingItemText,
        RaitingItemRight,
        RaitingItemCount,
        BalanceIcon,
    } = style();

    return (
        <Container className="scrollbar_hidden">
            <Title>Рейтинг побед</Title>
            <TextBox>
                <Text>Каждый день лидер рейтинга получает</Text>
                <TextPlug>100$</TextPlug>
            </TextBox>
            <Raiting>
                <RaitingItem>
                    <RaitingItemLeft>
                        <RaitingItemAvatar
                            src={`https://t.me/i/userpic/160/${'paultonnn'}.jpg`}
                        ></RaitingItemAvatar>
                        <RaitingItemText>Mike</RaitingItemText>
                    </RaitingItemLeft>
                    <RaitingItemRight>
                        <RaitingItemCount>151</RaitingItemCount>
                        <BalanceIcon alt="" src={IconCoin}></BalanceIcon>
                    </RaitingItemRight>
                </RaitingItem>
            </Raiting>
        </Container>
    );
};
