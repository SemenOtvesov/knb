import useAppSelector from '@js/hooks/useAppSelector';
import React, { useEffect, useRef } from 'react';
import style from './style';

type Tprops = {};
// @ts-ignore: Unreachable code error
import Камень from '@maket/img/icon/Камень.png';
// @ts-ignore: Unreachable code error
import Ножницы from '@maket/img/icon/Ножницы.png';
// @ts-ignore: Unreachable code error
import Бумага from '@maket/img/icon/Бумага.png';
// @ts-ignore: Unreachable code error
import close from '@maket/img/icon/close.png';

const imgConfig = { rock: Камень, paper: Бумага, scissors: Ножницы };

export default ({}: Tprops) => {
    const {
        BottomButton,
        BottonButtonBox,
        BottomButtonShadow,
        Opponent,
        Notmotion,
        NotmotionText,
    } = style();
    const { game, user } = useAppSelector(state => state.userState);

    const opponentRef = useRef<HTMLDivElement>(null);
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

    useEffect(() => {
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
        <>
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
        </>
    );
};
