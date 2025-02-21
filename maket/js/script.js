import '@maket/css/style.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '@js/components/mainComponents/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '@state/store';
import { APP_URL } from './constants/values';
import { TonConnectUIProvider } from '@tonconnect/ui-react';

const wrap = document.querySelector('#wrap');

const root = createRoot(wrap);
root.render(
    <TonConnectUIProvider manifestUrl={`https://${APP_URL}/tonconnect-manifest.json`}>
        <BrowserRouter basemname={`/${process.env.PUBLIC_URL}`}>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </TonConnectUIProvider>,
);
