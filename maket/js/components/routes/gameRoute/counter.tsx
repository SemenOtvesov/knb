import React, { useEffect, useLayoutEffect, useState } from 'react';
import style from './style';
import { Tgame } from '@js/types/state/user';
import { useNavigate } from 'react-router-dom';
import useAppDispatch from '@js/hooks/useAppDispatch';
import useAppSelector from '@js/hooks/useAppSelector';
import { setGame } from '@js/state/user/userState';

let timer = 5;

export default ({ game }: { game: Tgame }) => {
    const [counter, setcounter] = useState(timer);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const requestGame = useAppSelector(state => state.userState.requestGame);

    const { Counter } = style();

    useEffect(() => {
        const int = setInterval(() => {
            if (counter < 1) {
                clearInterval(int);
            } else {
                setcounter(p => (p < 1 ? 0 : p - 1));
            }
        }, 1000);
        return () => {
            clearInterval(int);
        };
    }, []);

    useEffect(() => {
        if (counter < 1 && requestGame != true) {
            if (game && game.game.Winner == undefined) {
                dispatch(setGame({ game: { game: { ...game.game, Winner: 1 } } }));
            }
        }
    }, [counter]);

    useEffect(() => {
        timer = counter;
    });

    useEffect(() => {
        if (game && game.game.Winner != undefined) {
            let i = 5;
            const int = setInterval(() => {
                if (i < 1) {
                    clearInterval(int);
                    timer = 5;
                    navigate('/');
                } else {
                    i -= 1;
                }
            }, 1000);
        }
    }, [game]);

    return (
        <Counter>
            <div id="counter">{counter}</div>
        </Counter>
    );
};
