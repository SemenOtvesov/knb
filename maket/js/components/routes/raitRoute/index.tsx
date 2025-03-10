import React, { useEffect } from 'react';
import style from './style';

// @ts-ignore: Unreachable code error
import IconCoin from '@maket/img/icon/cup.png';

// @ts-ignore: Unreachable code error
import baseAvatar from '@maket/img/icon/baseAvatar.png';

import useAppDispatch from '@js/hooks/useAppDispatch';
import useAppSelector from '@js/hooks/useAppSelector';
import tgAuth from '@js/api/tgAuth';

export default () => {
    const dispatch = useAppDispatch();
    const user = useAppSelector(state => state.userState.user);
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

    useEffect(() => {
        tgAuth(dispatch);
    }, []);
    if (!user) {
        return <></>;
    }
    return (
        <Container className="scrollbar_hidden">
            <Title>Рейтинг побед</Title>
            <TextBox>
                <Text>Каждый день лидер рейтинга получает</Text>
                <TextPlug>100$</TextPlug>
            </TextBox>
            <Raiting>
                {user?.dayRainting.length == 0
                    ? 'Пока что пусто('
                    : [...user.dayRainting]
                          ?.sort((p, n) => {
                              if (p?.wins > n?.wins) {
                                  return -1;
                              } else {
                                  return 1;
                              }
                          })
                          ?.map((el, i) => (
                              <RaitingItem>
                                  <RaitingItemLeft>
                                      <RaitingItemAvatar
                                          src={`https://t.me/i/userpic/160/${el.username}.jpg`}
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
                                      ></RaitingItemAvatar>
                                      <RaitingItemText
                                          className={`${
                                              i == 0
                                                  ? 'gold'
                                                  : i == 1
                                                  ? 'silver'
                                                  : i == 2
                                                  ? 'bronze'
                                                  : ''
                                          }`}
                                      >
                                          {i + 1}. {el.username}
                                      </RaitingItemText>
                                  </RaitingItemLeft>
                                  <RaitingItemRight>
                                      <RaitingItemCount>{el.wins}</RaitingItemCount>
                                      <BalanceIcon alt="" src={IconCoin}></BalanceIcon>
                                  </RaitingItemRight>
                              </RaitingItem>
                          ))}
            </Raiting>
        </Container>
    );
};
