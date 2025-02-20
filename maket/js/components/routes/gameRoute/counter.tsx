import React, { useEffect, useLayoutEffect, useState } from 'react';
import style from './style';
import { Tgame } from '@js/types/state/user';
import { useNavigate } from 'react-router-dom';

let timer = 5;

export default ({ game }: { game: Tgame }) => {
    const [counter, setcounter] = useState(timer);
    const navigate = useNavigate();
    const { Counter } = style();

    useEffect(() => {
        const int = setInterval(() => {
            if (counter < 1) {
                clearInterval(int);
            } else {
                setcounter(p => (p < 1 ? 0 : p - 1));
            }
        }, 1000);
    }, []);

    useEffect(() => {
        timer = counter;
    });

    useEffect(() => {
        if (game && game.gameId.Winner) {
            let i = 5;
            const int = setInterval(() => {
                if (i < 1) {
                    clearInterval(int);
                    timer = 5;
                    // navigate('/');
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
