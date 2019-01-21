import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import user from './user';
import posters from './poster';
import {i18nState} from 'redux-i18n'

const rootReducer = (history) => combineReducers({
    user,
    posters,
    router: connectRouter(history),
    i18nState
})

export default rootReducer