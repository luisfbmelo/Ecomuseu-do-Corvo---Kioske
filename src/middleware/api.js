import fetch from 'isomorphic-fetch';

// Actions
import {
  startLoading,
  stopLoading
} from 'actions/loading';

//  CONSTS
const BASE_URL = process.env.REACT_APP_API_URL+'/';


function callApi(endpoint, method, data, store) {
  let config = {};
  
  config = { 
    method: method || 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  if (data){
    config.body = JSON.stringify(data);
  }


  //  Show Loading if not already shown
  if(!store.getState().loading.status)
    store.dispatch(startLoading())

  return fetch(BASE_URL + endpoint, config)
    .then(response =>{    
        return response.json()
        .then(json => { 
          return {json, response}
        })
    })
    .then(({ json, response }) => {
      if (!response.ok) {  
        return Promise.reject({error: json, response})
      }
      return json;
    }).catch(err => {
      return Promise.reject(err)
    })
}

export const CALL_API = Symbol('Call API')

export default store => next => action => {
  const callAPI = action[CALL_API]
  
  // So the middleware doesn't get applied to every single action
  if (typeof callAPI === 'undefined') {
    return next(action)
  }
  
  return makeAPIRequest(callAPI, next, store);
}

function makeAPIRequest(callAPI, next, store){
  let { endpoint, types, method, data, compData } = callAPI;
  // eslint-disable-next-line no-unused-vars
  let requestType = null;
  let successType = null;
  let errorType = null;

  if (types){
    [ requestType, successType, errorType ] = types;
  }
  

  // Passing the authenticated boolean back in our data will let us distinguish between normal and secret quotes
  return callApi(endpoint, method, data, store).then(
    response => {
      //  Hide loading
      store.dispatch(stopLoading());

      // Continue to the requested information
      if (successType){
        next({
          data: response,
          compData,
          type: successType
        })
      }
      
    })   
    .catch((result) => {
      if (errorType){
        next({
          message: (result.error) ? (result.error.message || result.error) : 'There was an error.',
          status: result.response ? result.response.status : null,
          type: errorType
        })
      }
    }
  )
}