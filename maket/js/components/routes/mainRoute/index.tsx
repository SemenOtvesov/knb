import React from 'react';
import style from './style';

// @ts-ignore: Unreachable code error
import IconCoin from '@maket/img/icon/cup.png';
import Icon from '@js/components/microComponets/icon';
import CopyButton from './copyButton';
import { openAllert } from '@js/components/mainComponents/fn/allert';
import { inviteUrl } from '@js/constants/values';
import { TappDispatch } from '@js/state/store';
import useAppDispatch from '@js/hooks/useAppDispatch';
import startGame from '@js/api/startGame';
import { useNavigate } from 'react-router-dom';
import useAppSelector from '@js/hooks/useAppSelector';

export default () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { Container, Preview, ButtinBox, ButtonOne, Loader } = style();
    const gameType = useAppSelector(state => state.userState.gameType);

    return (
        <Container className="scrollbar_hidden">
            <Preview>
                Камень
                <br />
                Ножницы
                <br />
                Бумага
            </Preview>
            <ButtinBox>
                <ButtonOne
                    className="noselect"
                    onClick={() => {
                        startGame(dispatch, navigate);
                    }}
                    style={{ fontSize: '2.5em' }}
                >
                    Играть
                </ButtonOne>
                <ButtonOne
                    className="noselect"
                    onClick={() => {
                        copyClickboard(dispatch);
                    }}
                >
                    Пригласи друга <div style={{ fontWeight: 600, fontFamily: 'SFPro' }}>+50</div>
                    <Icon style={{ width: '2em', height: '2em' }} src={IconCoin} />
                </ButtonOne>
            </ButtinBox>

            {gameType == 'pending' && (
                <Loader>
                    <div className="loader"></div>
                    <div className="" style={{ width: '100%', textAlign: 'center' }}>
                        Ожидание игрока...
                    </div>
                </Loader>
            )}
        </Container>
    );
};

function copyClickboard(dispatch: TappDispatch) {
    // @ts-ignore: Unreachable code error
    const id = window.Telegram.WebApp.initDataUnsafe.user.id;
    navigator.clipboard.writeText(`${inviteUrl}${id}`);

    openAllert(dispatch, 'Ссылка была скопирована!');
}
