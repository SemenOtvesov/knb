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
            top: '5vh',
            left: '0',
            height: 'calc(95vh)',
            width: '100vw',

            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '3vh',
            color: '#fff',

            padding: '2vh 1em',
        }),
        Avatar: styled.img({
            maxWidth: '13vw',
            maxHeight: '13vw',
            minWidth: '12vw',
            minHeight: '12vw',
            borderRadius: '50%',
            backgroundColor: '',
        }),
        BalanceIcon: styled.img({
            width: '2em',
        }),
        Top: styled.div({
            display: 'flex',
            flexDirection: 'column',
            gap: '1vh',
            alignItems: 'center',
            justifyContent: 'center',
        }),
        PlayerName: styled.div({
            fontSize: '1.15em',
        }),
        Counter: styled.div({
            backgroundColor: '#FF378D',
            width: '4em',
            height: '4em',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',

            div: {
                width: '2em',
                height: '2em',
                borderRadius: '50%',
                backgroundColor: '#FC82B7',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5em',
                fontWeight: 600,
            },
        }),
        Rewards: styled.div({
            display: 'flex',
            alignItems: 'center',
            gap: '0.5em',
            fontSize: '1.15em',
        }),
        Bottom: styled.div({
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            position: 'relative',
        }),
        BottomButton: styled.img({
            pointerEvents: 'all',
            borderRadius: '50%',
            height: '17vh',
            maxWidth: '30vw',
        }),
        BottonButtonBox: styled.div({
            pointerEvents: 'all',
            transition: '0.3s',
            position: 'relative',

            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            '&:nth-child(2)': {
                transform: 'translate(0,-50%)',
            },
            '&.hidden': {
                transform: 'translate(0,200%)',
            },
        }),
        BottomButtonShadow: styled.div({
            zIndex: 1,
            pointerEvents: 'all',
            position: 'absolute',
            width: '90%',
            height: '90%',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            borderRadius: '50%',
            transition: '0.3s',
            '&.active': {
                boxShadow: '0 0 10px 5px #FFFFFF',
            },
            '&.activeRed': {
                boxShadow: '0 0 10px 5px #FF0000B2',
            },
            '&.activeGreen': {
                boxShadow: '0 0 10px 5px #00FF15B2',
            },
        }),
        Opponent: styled.div({
            transition: '0.3s',
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            position: 'absolute',
            top: '0',
            left: 0,
            transform: ' translate(0, -100%) rotate(-180deg)',
            '&.visable': {
                transform: ' translate(0, calc(32vh + 50%)) rotate(-180deg)',
            },
        }),
        Notmotion: styled.div({
            transition: '0.3s',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            gap: '1em',
            width: '100%',
            position: 'absolute',
            top: '0',
            left: 0,
            transform: ' translate(0, -100%)',
            '&.visable': {
                transform: ' translate(0, calc(50vh - 50%))',
            },
        }),
        NotmotionText: styled.div({ fontFamily: 'Game Of Squids' }),

        RewardTextBox: styled.div({
            position: 'absolute',
            top: '75%',
            width: '100%',

            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            gap: '0.5em',

            opacity: 0,
            pointerEvents: 'none',
            transition: '0.3s',

            '&.active': {
                opacity: 1,
            },
        }),
        RewardText: styled.div({
            fontFamily: 'Game Of Squids',
        }),
        RewardValue: styled.div({
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.5em',
            fontWeight: 600,
        }),
        size,
    };
};
