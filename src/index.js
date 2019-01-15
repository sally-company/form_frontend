import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'react-router-redux'
import store, {history} from 'redux/configureStore'
import App from 'components/App';
import I18n from 'redux-i18n'
import {translations} from "translations";
import "ReactotronConfig";


ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter store={store} history={history}>
            <I18n translations={translations} initialLang={`en`} fallbackLang={`en`}>
                <App/>
            </I18n>
        </ConnectedRouter>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

