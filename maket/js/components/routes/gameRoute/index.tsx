import React from 'react';
import style from './style';

import Top from './top';
import Bottom from './bottom';
import Opponents from './opponents';

export default () => {
    const { Container } = style();

    return (
        <Container id="gameContainer" className="scrollbar_hidden">
            <Opponents />
            <Top />
            <Bottom />
        </Container>
    );
};
