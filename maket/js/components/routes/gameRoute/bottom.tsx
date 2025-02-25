import React, { useEffect, useRef, useState } from 'react';
import style from './style';
import useAppDispatch from '@js/hooks/useAppDispatch';

import makemove from '@js/api/makemove';

// @ts-ignore: Unreachable code error
import IconCoin from '@maket/img/icon/cup.png';

// @ts-ignore: Unreachable code error
import Камень from '@maket/img/icon/Камень.png';
// @ts-ignore: Unreachable code error
import Ножницы from '@maket/img/icon/Ножницы.png';
// @ts-ignore: Unreachable code error
import Бумага from '@maket/img/icon/Бумага.png';
import useAppSelector from '@js/hooks/useAppSelector';

let notSelected = true;
export default () => {
    const [activeCard, setactiveCard] = useState('');
    const { game, user } = useAppSelector(state => state.userState);
    const dispatch = useAppDispatch();
    const {
        BalanceIcon,
        Bottom,
        BottomButton,
        BottonButtonBox,
        BottomButtonShadow,
        RewardTextBox,
        RewardText,
        RewardValue,
    } = style();

    const rockRef = useRef<HTMLDivElement>(null);
    const paperRef = useRef<HTMLDivElement>(null);
    const scissorsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        notSelected = true;
    }, []);
    useEffect(() => {
        console.log(activeCard, rockRef.current);
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
    });

    return (
        <Bottom>
            <BottonButtonBox
                data-butbox
                className="butBox"
                onClick={e => {
                    if (game?.gameId.Winner == undefined) {
                        if (notSelected) {
                            notSelected = false;
                            setactiveCard('rock');
                        }
                        game && makemove(dispatch, game.gameId.id, 'rock');
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
                    if (game?.gameId.Winner == undefined) {
                        if (notSelected) {
                            notSelected = false;
                            setactiveCard('scissors');
                        }
                        game && makemove(dispatch, game.gameId.id, 'scissors');
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
                    if (game?.gameId.Winner == undefined) {
                        if (notSelected) {
                            notSelected = false;
                            setactiveCard('paper');
                        }
                        game && makemove(dispatch, game.gameId.id, 'paper');
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
                    <BalanceIcon style={{ fontSize: '0.75em' }} alt="" src={IconCoin}></BalanceIcon>
                </RewardValue>
            </RewardTextBox>
        </Bottom>
    );
};
