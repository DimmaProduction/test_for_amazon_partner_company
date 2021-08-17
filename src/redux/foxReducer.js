import { API } from "../api/api";

const ADD_NEW_IMAGE_FOX = "ADD_NEW_IMAGE_FOX";
const SET_NEW_URL_FOX = "SET_NEW_URL_FOX";
const TOGGLE_FETCHING_FOX = "TOGGLE_FETCHING_FOX";



let initialState = {
  isFetching: false,
  images: [
    {id: 1, url: 'https://randomfox.ca/images/119.jpg'}
  ],
  url: 'https://randomfox.ca/images/119.jpg'
};

const foxReducer = (state = initialState, action) => {
  
  switch (action.type){
    case ADD_NEW_IMAGE_FOX : 
      let newImage = {
        id: state.images.length + 1,
        url: action.url
      };
      return {
         ...state, 
         images: [ ...state.images, newImage]
      };
    
    case SET_NEW_URL_FOX : 
      return {
        ...state, 
        url: action.url,
      };

    case TOGGLE_FETCHING_FOX : 
      return {
        ...state, 
        isFetching: !state.isFetching
      };


    default :
      return state;
  } 

}

export const addNewImageAC = (url) => ({type: ADD_NEW_IMAGE_FOX, url});
export const setNewUrlAC = (url) => ({type: SET_NEW_URL_FOX, url});
export const toggleFetching = () => ({type: TOGGLE_FETCHING_FOX,});


export const getNewFox = () =>
  async (dispatch) => {
    dispatch(toggleFetching());

    let url = await API.getFox();
    dispatch(setNewUrlAC(url));
    dispatch(addNewImageAC(url));

    dispatch(toggleFetching());
  }


export default foxReducer;