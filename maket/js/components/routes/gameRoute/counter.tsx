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
            if (game && game.gameId.Winner == undefined) {
                dispatch(setGame({ game: { gameId: { ...game.gameId, Winner: 1 } } }));
            }
        }
    }, [counter]);

    useEffect(() => {
        timer = counter;
    });

    useEffect(() => {
        if (game && game.gameId.Winner != undefined) {
            const butboxs = document.querySelectorAll('[data-butbox]');
            butboxs.forEach(el => {
                el.setAttribute('style', 'pointer-events: none;');
                el.querySelector('div')?.setAttribute('style', 'pointer-events: none;');
                el.querySelector('img')?.setAttribute('style', 'pointer-events: none;');
            });
            let i = 5;
            const int = setInterval(() => {
                if (i < 1) {
                    clearInterval(int);
                    timer = 5;
                    navigate('/');
                    butboxs.forEach(el => {
                        el.setAttribute('style', '');
                        el.querySelector('div')?.setAttribute('style', '');
                        el.querySelector('img')?.setAttribute('style', '');
                    });
                } else {
                    i -= 1;
                }
            }, 1000);
        }
    }, [game]);

    return (
        <Counter>
            <div>{counter}</div>
        </Counter>
    );
};
