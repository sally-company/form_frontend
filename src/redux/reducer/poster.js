//import
import axios from 'axios'

//actions
const SET_SALON = "SET_SALON"
const SET_IMAGE = "UPLOAD_IMAGE"

//action creators
function setImage(image) {
    return{
        type : SET_IMAGE,
        image
    }

}

function setSalon(salon) {
    return{
        type : SET_SALON,
        salon
    }
}

//api actions

function uploadImage(image) {

    const formData = new FormData();
    formData.append('image', image);

    return axios.post('/upload', {image})
            .then(res => {
                const {data} = res.data
                console.log(data)
                return { data: { link: "http://dummy_image_src.com" }};
            })
            .catch(err =>
                console.log(err)
            );


    // return () =>{
    //
    //     axios.post('/users/', {image})
    //         .then(res => {
    //             const {data} = res.data
    //             console.log(data)
    //             return new Promise(
    //                 (resolve, reject) => {
    //                     resolve({ data: { link: "http://dummy_image_src.com" } });
    //                 }
    //             );
    //         })
    //         .catch(err =>
    //             console.log(err)
    //         );
    //
    // }

}

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

//initial state

const initialState = {}

//reducer

function reducer(state = initialState, action) {

    switch (action.type) {

        case SET_SALON :
            return applySetSalon(state, action)
        case SET_IMAGE :
            return applySetImage(state, action)
        default:
            return state

    }

}

//reducer functions
function applySetImage(state, action) {
    const {image} = action
    return{
        ...state,
        image
    }

}

function applySetSalon(state, action) {

    const  {salon} = action
    return{
        ...state,
        salon
    }
}

//exports
const actionCreators= {
    getSalon,
    uploadImage
}

export {actionCreators}

//default reduce export

export default reducer