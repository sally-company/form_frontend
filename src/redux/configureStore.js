import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from 'redux-thunk'
import { routerReducer, routerMiddleware } from "react-router-redux";
import createHistory from 'history/createBrowserHistory'
import {composeWithDevTools} from "redux-devtools-extension";
import {i18nState} from 'redux-i18n'
import user from 'redux/modules/user';
import Reactotron from 'ReactotronConfig';



const __DEV__ = "development";


//check prod, dev인지 process를 통해서 확인 가능하다.
const env = process.env.NODE_ENV;

const history = createHistory();
//develop production 둘다 사용할때 표현 한다.
const middleWares = [thunk, routerMiddleware(history)]



if (env === __DEV__){
    const {logger} = require("redux-logger")
    middleWares.push(logger)
}


const reducer = combineReducers({
    user,
    routing: routerReducer,
    i18nState
})

let store;
//
if (env === __DEV__){
    store = initialState =>
        Reactotron
            .createStore(reducer, composeWithDevTools(applyMiddleware(...middleWares))) //use redux devtools plugin
}else {
    store = initialState => createStore(reducer, applyMiddleware(...middleWares))
}




export { history };
export default store();