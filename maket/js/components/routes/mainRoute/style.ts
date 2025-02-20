import styled from '@emotion/styled';
import { iOS } from '@js/components/mainComponents/fn/resize';
import useTheme from '@js/hooks/useTheme';
import useWindowSizeCheck from '@js/hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    const {} = useTheme();
    const ios = iOS();
    return {
        Container: styled.div({
            position: 'sticky',
            top: '10vh',
            left: '0',
            height: 'calc(90vh - (5em + 1vh))',
            width: '100vw',

            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '3vh',
            color: '#fff',

            padding: '3em 1em',
        }),
        Preview: styled.div({
            fontFamily: 'Game Of Squids',
            fontSize: '2.5em',
            lineHeight: '1.25em',
            width: '100%',
        }),
        ButtinBox: styled.div({
            fontFamily: 'Game Of Squids',
            display: 'flex',
            flexDirection: 'column',
            gap: '1em',
            width: ' 100%',
        }),
        ButtonOne: styled.button({
            backgroundColor: '#000',
            color: '#fff',
            fontSize: '1.25em',
            width: '100%',
            borderRadius: 20,
            padding: '1rem',

            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5em',

            pointerEvents: 'all',
        }),
        Loader: styled.div({
            position: 'fixed',
            top: '50%',
            left: '50%',
            width: '50vw',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#00000080',

            padding: '2em',

            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: '1em',
            borderRadius: 20,
        }),
        size,
    };
};
