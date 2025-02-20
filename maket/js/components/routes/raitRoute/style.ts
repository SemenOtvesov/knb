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
            gap: '3vh',
            color: '#fff',

            padding: '3em 1em',
        }),
        Title: styled.div({
            fontFamily: 'Game Of Squids',
            fontSize: '1.5em',
            width: '100%',
        }),
        TextBox: styled.div({
            display: 'flex',
            gap: '0.5em',
            padding: '0.5em',
            backgroundColor: '#D9D9D94D',
            borderRadius: 30,
            width: '100%',

            justifyContent: 'space-between',
            alignItems: 'center',
        }),
        Text: styled.div({}),
        TextPlug: styled.div({
            backgroundColor: '#FF378D',
            borderRadius: 20,
            padding: '0.25em',
        }),
        Raiting: styled.div({ width: '100%' }),
        RaitingItem: styled.div({
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
        }),
        RaitingItemLeft: styled.div({
            display: 'flex',
            alignItems: 'center',
            gap: '0.5em',
        }),
        RaitingItemAvatar: styled.img({
            width: '2em',
            height: '2em',
            borderRadius: '50%',
            backgroundColor: '',
        }),
        RaitingItemText: styled.div({ fontWeight: 600 }),
        RaitingItemRight: styled.div({ display: 'flex', alignItems: 'center', gap: '0.25em' }),
        RaitingItemCount: styled.div({ fontWeight: 600 }),
        BalanceIcon: styled.img({
            width: '2em',
        }),
        size,
    };
};
