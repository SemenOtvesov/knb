import React, { useEffect, useRef, useState } from 'react';
import style from './style';

import useAppDispatch from '@js/hooks/useAppDispatch';
import useAppSelector from '@js/hooks/useAppSelector';

// @ts-ignore: Unreachable code error
import IconCoin from '@maket/img/icon/cup.png';

// @ts-ignore: Unreachable code error
import Камень from '@maket/img/icon/Камень.png';
// @ts-ignore: Unreachable code error
import Ножницы from '@maket/img/icon/Ножницы.png';
// @ts-ignore: Unreachable code error
import Бумага from '@maket/img/icon/Бумага.png';
// @ts-ignore: Unreachable code error
import close from '@maket/img/icon/close.png';
// @ts-ignore: Unreachable code error
import baseAvatar from '@maket/img/icon/baseAvatar.png';

import makemove from '@js/api/makemove';
import Counter from './counter';

let notSelected = true;

const imgConfig = { rock: Камень, paper: Бумага, scissors: Ножницы };

export default () => {
    const dispatch = useAppDispatch();
    const {
        Container,
        Top,
        PlayerName,
        Avatar,
        Rewards,
        BalanceIcon,
        Bottom,
        BottomButton,
        BottonButtonBox,
        BottomButtonShadow,
        Opponent,
        RewardTextBox,
        RewardText,
        RewardValue,
        Notmotion,
        NotmotionText,
    } = style();
    const { game, user } = useAppSelector(state => state.userState);

    const rockRef = useRef<HTMLDivElement>(null);
    const paperRef = useRef<HTMLDivElement>(null);
    const scissorsRef = useRef<HTMLDivElement>(null);
    const opponentRef = useRef<HTMLDivElement>(null);

    const [activeCard, setactiveCard] = useState('');

    useEffect(() => {
        if (game && game.gameId.Winner != undefined) {
            const buttions = document.querySelectorAll('[data-butbox]');
            buttions.forEach((el, i) => {
                if (i == 0 || i == 2) {
                    el.classList.add('hidden');
                }
                if (game.gameId.Winner != undefined && game.gameId.Move1 == undefined) {
                    if (i == 1) {
                        el.classList.add('hidden');
                    }
                }
                if (i == 1) {
                    const userCounter = game.gameId.Player1Id == user?.userInfo.id ? 1 : 2;
                    el
                        ?.querySelector('img')
                        // @ts-ignore: Unreachable code error
                        ?.setAttribute('src', imgConfig[game.gameId[`Move${userCounter}`]]);
                    if (user?.userInfo.id != game.gameId.Winner && game.gameId.Winner != 0) {
                        el.querySelector('div')?.classList.add('activeRed');
                    } else {
                        el.querySelector('div')?.classList.add('activeGreen');
                    }
                }
            });
        }
    }, [game]);

    const userCounter = game?.gameId.Player1Id == user?.userInfo.id ? 1 : 2;
    useEffect(() => {
        if (activeCard == 'rock') {
            rockRef.current?.classList.add('active');
            rockRef.current?.setAttribute('style', 'transition: 0s');
        }
        if (activeCard == 'paper') {
            paperRef.current?.classList.add('active');
            paperRef.current?.setAttribute('style', 'transition: 0s');
        }
        if (activeCard == 'scissors') {
            scissorsRef.current?.classList.add('active');
            scissorsRef.current?.setAttribute('style', 'transition: 0s');
        }
        if (game && game.gameId.Winner != undefined && game.gameId.Move1 != undefined) {
            if (user?.userInfo.id == game.gameId.Winner) {
                opponentRef.current?.classList.add('activeRed');
            } else {
                opponentRef.current?.classList.add('activeGreen');
            }
            opponentRef.current?.closest('[data-opponent]')?.classList.add('visable');
            document.getElementById('reward')?.classList.add('active');
        }

        if (game && game.gameId.Winner != undefined && game.gameId.Move1 == undefined) {
            document.querySelector('[data-notmotion]')?.classList.add('visable');
        }
    });

    return (
        <Container className="scrollbar_hidden">
            <Opponent data-opponent>
                <BottonButtonBox className="butBox">
                    <BottomButton
                        src={
                            game && user
                                ? game.gameId[
                                      `Move${game.gameId.Player1Id != user.userInfo.id ? 1 : 2}`
                                  ] == ''
                                    ? close
                                    : // @ts-ignore: Unreachable code error
                                      imgConfig[
                                          game.gameId[
                                              `Move${
                                                  game.gameId.Player1Id != user.userInfo.id ? 1 : 2
                                              }`
                                          ]
                                      ]
                                : ''
                        }
                    ></BottomButton>
                    <BottomButtonShadow ref={opponentRef} className={`shadow`} />
                </BottonButtonBox>
            </Opponent>

            <Notmotion data-notmotion>
                <BottonButtonBox className="butBox">
                    <BottomButton src={close}></BottomButton>
                    <NotmotionText>Вы не сходили</NotmotionText>
                </BottonButtonBox>
            </Notmotion>

            <Top>
                <PlayerName>{game?.gameId[`Player${userCounter}UserName`]}</PlayerName>
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
                    src={`https://t.me/i/userpic/160/${game?.gameId[
                        `Player${userCounter}UserName`
                    ]}.jpg`}
                ></Avatar>
                <Rewards>
                    {game?.gameId[`User${userCounter}Wins`]}
                    <BalanceIcon style={{ fontSize: '0.75em' }} alt="" src={IconCoin}></BalanceIcon>
                </Rewards>
                <Counter game={game} />
            </Top>
            <Bottom>
                <BottonButtonBox
                    data-butbox
                    className="butBox"
                    onClick={e => {
                        game && makemove(dispatch, game.gameId.id, 'rock');

                        if (notSelected) {
                            notSelected = false;
                            setactiveCard('rock');
                        }
                    }}
                >
                    <BottomButton src={Камень}></BottomButton>
                    <BottomButtonShadow ref={rockRef} className={`shadow`} />
                </BottonButtonBox>
                <BottonButtonBox
                    data-butbox
                    className="butBox"
                    onClick={e => {
                        game && makemove(dispatch, game.gameId.id, 'scissors');

                        if (notSelected) {
                            notSelected = false;
                            setactiveCard('scissors');
                        }
                    }}
                >
                    <BottomButton src={Ножницы}></BottomButton>
                    <BottomButtonShadow ref={scissorsRef} className={`shadow`} />
                </BottonButtonBox>
                <BottonButtonBox
                    data-butbox
                    className="butBox"
                    onClick={e => {
                        game && makemove(dispatch, game.gameId.id, 'paper');

                        if (notSelected) {
                            notSelected = false;
                            setactiveCard('paper');
                        }
                    }}
                >
                    <BottomButton src={Бумага}></BottomButton>
                    <BottomButtonShadow ref={paperRef} className={`shadow`} />
                </BottonButtonBox>

                <RewardTextBox id="reward">
                    <RewardText>
                        {user?.userInfo.id == game?.gameId.Winner
                            ? 'Победа!'
                            : game?.gameId.Winner == 0
                            ? 'Ничья'
                            : 'Проигрыш...'}
                    </RewardText>
                    <RewardValue>
                        {user?.userInfo.id == game?.gameId.Winner ? '+1' : '+0'}
                        <BalanceIcon
                            style={{ fontSize: '0.75em' }}
                            alt=""
                            src={IconCoin}
                        ></BalanceIcon>
                    </RewardValue>
                </RewardTextBox>
            </Bottom>
        </Container>
    );
};
