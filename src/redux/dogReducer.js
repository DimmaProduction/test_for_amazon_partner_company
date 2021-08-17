import { API } from "../api/api";

const ADD_NEW_IMAGE_DOG = "ADD_NEW_IMAGE_DOG";
const SET_NEW_URL_DOG = "SET_NEW_URL_DOG";
const TOGGLE_FETCHING_DOG = "TOGGLE_FETCHING_DOG";



let initialState = {
  isFetching: false,
  images: [
    {id: 1, url: 'https://images.dog.ceo/breeds/weimaraner/n02092339_363.jpg'}
  ],
  url: 'https://images.dog.ceo/breeds/weimaraner/n02092339_363.jpg'
};

const dogReducer = (state = initialState, action) => {
  
  switch (action.type){
    case ADD_NEW_IMAGE_DOG : 
      let newImage = {
        id: state.images.length + 1,
        url: action.url
      };
      return {
         ...state, 
         images: [ ...state.images, newImage]
      };
    
    case SET_NEW_URL_DOG : 
      return {
        ...state, 
        url: action.url,
      };

    case TOGGLE_FETCHING_DOG : 
      return {
        ...state, 
        isFetching: !state.isFetching
      };

    default :
      return state;
  } 

}

export const addNewImageAC = (url) => ({type: ADD_NEW_IMAGE_DOG, url});
export const setNewUrlAC = (url) => ({type: SET_NEW_URL_DOG, url});
export const toggleFetching = () => ({type: TOGGLE_FETCHING_DOG,});



export const getNewDog = () =>
  async (dispatch) => {
    dispatch(toggleFetching());

    let url = await API.getDog();
    dispatch(setNewUrlAC(url));
    dispatch(addNewImageAC(url));

    dispatch(toggleFetching());

  }


export default dogReducer;