//imports

import axios from 'axios'

//actions

const SAVE_TOKEN = 'SAVE_TOKEN'

//action creators

function saveToken(token) {

    return {
        type: SAVE_TOKEN,
        token
    }

}

//API actions

function facebookLogin(response) {

    return dispatch => {
        axios.post('/users/', {response})
            .then(res => {
                const user = res.data.user
                if (user.userToken){
                    localStorage.setItem('jwt', user.userToken)
                    dispatch(saveToken(user.userToken))
                }
            })
            .catch(err =>
                dispatch({
                    payload: err.response.data
                })
            );
    }

}

function facebookSignup(response) {

    return dispatch => {

        axios.post('/users/signup', {response})
            .then(res => {
                const user = res.data.user
                if (user.userToken){
                    localStorage.setItem('jwt', user.userToken)
                    dispatch(saveToken(user.userToken))
                }
            })
            .catch(err =>
                dispatch({
                    payload: err.response.data
                })
            );

    }
}

//intitial state

const initialState = {
    isLoggedIn: localStorage.getItem('jwt') ? true : false,
    token : localStorage.getItem('jwt')
};

//reducer

function reducer(state = initialState, action) {

    switch (action.type) {
        case SAVE_TOKEN :
            return applySetToken(state, action)
        default :
            return state

    }

}

//reducer functions

function applySetToken(state, action) {

    const {token} = action;
    localStorage.setItem("jwt", token)
    return {
        ...state,
        isLoggedIn: true,
        token
    }

}

//exports

const actionCreators = {
    facebookLogin,
    facebookSignup
}

export {actionCreators}

//reducer export

export default reducer;