import styled from '@emotion/styled';
import useWindowSizeCheck from '@js/hooks/useWindowSizeCheck';
import { NavLink } from 'react-router-dom';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Container: styled.div({
            position: 'sticky',
            bottom: '1vh',
            left: '0',
            margin: '0 5vw',
            height: '14em',
            maxHeight: '14em',
            width: '90vw',
            minHeight: '5em',

            display: 'flex',
            justifyContent: 'space-between',

            padding: '1em 2em',
            borderRadius: 20,
            backgroundColor: '',
            '-webkit-tap-highlight-color': 'transparent',

            color: '#fff',
        }),
        Item: styled(NavLink)({
            display: 'flex',
            flexDirection: 'column',

            '&.active': {
                div: { color: '#FF378D' },
            },
        }),
        ItemText: styled.div({
            fontSize: '1em',
            fontWeight: 600,
            textAlign: 'center',
            color: '#fff',
        }),
        Icon: styled.div({ fontSize: '3.5em', color: '#fff' }),
        size,
    };
};
