import { API } from "../api/api";

const ADD_NEW_IMAGE_CAT = "ADD_NEW_IMAGE_CAT";
const SET_NEW_URL_CAT = "SET_NEW_URL_CAT";
const TOGGLE_FETCHING_CAT = "TOGGLE_FETCHING_CAT";



let initialState = {
  isFetching: false,
  images: [
    {id: 1, url: 'https://cataas.com/cat/5ca2ff9f5298830011cd86cd'}
  ],
  url: 'https://cataas.com/cat/5ca2ff9f5298830011cd86cd'
};

const catReducer = (state = initialState, action) => {
  
  switch (action.type){
    case ADD_NEW_IMAGE_CAT : 
      let newImage = {
        id: state.images.length + 1,
        url: action.url
      };
      return {
         ...state, 
         images: [ ...state.images, newImage]
      };
    
    case SET_NEW_URL_CAT : 
      return {
        ...state, 
        url: action.url,
      };

    case TOGGLE_FETCHING_CAT : 
      return {
        ...state, 
        isFetching: !state.isFetching
      };


    default :
      return state;
  } 

}

export const addNewImageAC = (url) => ({type: ADD_NEW_IMAGE_CAT, url});
export const setNewUrlAC = (url) => ({type: SET_NEW_URL_CAT, url});
export const toggleFetching = () => ({type: TOGGLE_FETCHING_CAT,});


export const getNewCat = () =>
  async (dispatch) => {
    dispatch(toggleFetching());
    
    let url = await API.getCat();
    dispatch(setNewUrlAC(url));
    dispatch(addNewImageAC(url)); 

    dispatch(toggleFetching());
}

export default catReducer;