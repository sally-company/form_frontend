import {createStore, compose ,applyMiddleware} from "redux";
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import { composeWithDevTools } from "redux-devtools-extension";
import { routerMiddleware } from "connected-react-router";
import createRootReducer from './reducer'

const __DEV__ = "development";

//check prod, dev인지 process를 통해서 확인 가능하다.
const env = process.env.NODE_ENV;

const history = createHistory();
//develop production 둘다 사용할때 표현 한다.
const middleWares = [thunk, routerMiddleware(history)]

if (env === __DEV__){
    const {logger} = require("redux-logger")
    middleWares.push(logger)
};

let store;
//
if (env === __DEV__){
    store = initialState => createStore(createRootReducer(history),composeWithDevTools(applyMiddleware(...middleWares)))
        // Reactotron
        //     .createStore(reducer, composeWithDevTools(applyMiddleware(...middleWares))) //use redux devtools plugin
}else {
    store = initialState => createStore(createRootReducer(history), compose(applyMiddleware(...middleWares)))
}

export { history };
export default store();