import styled from '@emotion/styled';
import useWindowSizeCheck from '@js/hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Container: styled.div({
            height: '10vh',
            width: '100vw',
            position: 'sticky',
            top: 0,
            left: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 1em',
            minHeight: '5em',
            zIndex: 100,

            color: '#fff',
        }),
        Avatar: styled.img({
            maxWidth: '13vw',
            maxHeight: '13vw',
            borderRadius: '50%',
            backgroundColor: '',
        }),
        Name: styled.div({
            color: '',
            fontSize: '1em',
            fontWeight: 700,
        }),
        AvatarBox: styled.div({ display: 'flex', alignItems: 'center', gap: '1em' }),
        BalanceBox: styled.div({
            display: 'flex',
            alignItems: 'center',
            gap: 8,
        }),
        BalanceText: styled.div({
            fontWeight: 600,
            fontSize: '1.25em',
        }),
        BalanceValue: styled.div({
            display: 'flex',
            alignItems: 'center',
            justifyItems: 'center',
            justifyContent: 'center',
            gap: '0.5em',
        }),
        BalanceIcon: styled.img({
            width: '2em',
        }),
        WalletIcon: styled.img({
            width: '1.565em',
        }),
        BalanceIconBox: styled.div({
            position: 'relative',
        }),
        size,
    };
};
