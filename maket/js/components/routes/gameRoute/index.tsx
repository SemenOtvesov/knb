import React from 'react';
import style from './style';

import useAppSelector from '@js/hooks/useAppSelector';

import Top from './top';
import Bottom from './bottom';
import Opponents from './opponents';

export default () => {
    const { Container } = style();

    return (
        <Container className="scrollbar_hidden">
            <Opponents />
            <Top />
            <Bottom />
        </Container>
    );
};
