import React, { memo } from 'react';
import style from './style';
import { useLocation } from 'react-router-dom';

export default memo(
    () => {
        const { Container, Item, ItemText, Icon } = style();
        const location = useLocation();
        if (location.pathname.includes('game')) {
            return <></>;
        }
        return (
            <Container>
                <Item to={'/'}>
                    <Icon className="icon-game icon" />
                    <ItemText>Игра</ItemText>
                </Item>
                <Item to={'/raiting'}>
                    <Icon className="icon-rait icon" />
                    <ItemText>Рейтинг</ItemText>
                </Item>
            </Container>
        );
    },
    () => true,
);
