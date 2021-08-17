import * as axios from 'axios';

export const API = {

    getCat() {
        return axios.get(`https://cataas.com/cat?json=true`)
        .then( 
             response =>   {   
                 return `https://cataas.com/${response.data.url}`;
              }   
        )   
    },
    getDog() {
        return axios.get(`https://dog.ceo/api/breeds/image/random`)
        .then( 
             response =>   {   
                 return response.data.message;
              }   
        )    
    },
    getFox() {
        return axios.get(`https://randomfox.ca/floof/`)
        .then(
            response => {
                return response.data.image;
            }
        )
    }


}

