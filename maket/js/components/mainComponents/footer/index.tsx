import React, { memo } from 'react';
import style from './style';

export default memo(
    () => {
        const { Container, Item, ItemText, Icon } = style();
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
