//import
import axios from 'axios'

//actions
const SET_SALON = "SET_SALON"
//action creators

function setSalon(salon) {
    return{
        type : SET_SALON,
        salon
    }
}

//api actions

function getSalon() {
    return (dispatch) => {
         axios.get('/salons/')
            .then(res => {

                dispatch(setSalon(res.data.result))

            })
            .catch(err =>
                dispatch({
                    payload: err.response.data
                })
            );
    }
}

//initial stat

const initialState = {
}

//reducer

function reducer(state = initialState, action) {

    switch (action.type) {

        case SET_SALON :
            return applySetSalon(state, action)
        default:
            return state

    }

}

//reducer functions
function applySetSalon(state, action) {

    const  {salon} = action
    return{
        ...state,
        salon
    }
}

//exports
const actionCreators= {
    getSalon
}

export {actionCreators}

//default reduce export

export default reducer