//imports

import axios from 'axios'

// Actions

/**
 * 유저 정보를 얻는다.
 */
const GET_USER = 'GET_USER';

const SAVE_TOKEN = 'SAVE_TOKEN';

/**
 * 유저 정보를 수정한다.
 */
const SET_USER = "SET_USER";

const LOGIN = "LOGIN";

const LOGOUT = "LOGOUT";

// -> 가입되지 않은 사용자 입니다. 가입하시겠습니까?
// -> 가입창으로 넘어오게 된다.

// thunk, 객체 대신 함수를 생성하는 액션 생성함수를 작성할 수 있게 해준다.

// 일반 액션생성자 함수, 
// const actionCreator = (payload) => ({ type: 'ACTION_TYPE', payload});

// ex
// const INCREMENT_COUNTER = "INCREMENT_COUNTER";
// function increment() { return { type: INCREMENT_COUNTER }} 
// function incrementAsync() {
//   return dispatch => { 
//     setTimeout(() => { dispatch(increment()); }, 1000);
//   };
// }
//
// function incIfOdd() {
//  return (dispatch, getState) => {
//      const { counter } = getState();
//      if (counter % 2 == 0) { return; }
//      dispatch(increment());
//  }
//}


const loggerMiddleware = (store) => (next) => (action) => { 
    return next(action); // 여기서 반환하는 값은 store.dispatch(types)
}

// action creators

function saveToken(token) {
    return {
        type: SAVE_TOKEN,
        token
    }
}

// API actions

function adminLogin(username, password) {
    
}

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
                    console.log(sessionStorage)
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