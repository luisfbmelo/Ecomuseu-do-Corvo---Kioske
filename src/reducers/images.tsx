import { 
	IMAGES_REQUEST, 
	IMAGES_SUCCESS,
	IMAGES_FAILURE,
  IMAGES_RESET,
  IMAGE_REQUEST, 
	IMAGE_SUCCESS,
	IMAGE_FAILURE,
  IMAGE_RESET,
  RELATED_IMAGES_REQUEST, 
	RELATED_IMAGES_SUCCESS,
	RELATED_IMAGES_FAILURE,
  RELATED_IMAGES_RESET
} from 'actions/action-types';

export const INITIAL_STATE = { fetching: false, fetched: false, data: null, errorMessage: null, errorStatus: null };

export type INITIAL_TYPE = {
  fetching: boolean
  fetched: boolean
  data: any
  errorMessage: string
  errorStatus: string
}

export default function(state = INITIAL_STATE, action: any) {
  switch(action.type) {
    case IMAGES_REQUEST:
      return {
        ...state,
        fetching: true
      }
    case IMAGES_SUCCESS:
      return {
        ...state,
        fetching: false,
        fetched: true,
        data: action.data,
        errorMessage: null,
        errorStatus: null
      }
    case IMAGES_FAILURE:
      return {
        ...state,
        fetching: false,
        /* errorMessage: action.data.message,
        errorStatus: action.data.code */
      }
    case IMAGES_RESET:
      return {
        ...state,
        fetching: false,
        fetched: false,
        data: null
      }
    default:
      return state;
  }
}


export const image = function(state = INITIAL_STATE, action: any) {
  switch(action.type) {
    case IMAGE_REQUEST:
      return {
        ...state,
        fetching: true
      }
    case IMAGE_SUCCESS:
      return {
        ...state,
        fetching: false,
        fetched: true,
        data: action.data,
        errorMessage: null,
        errorStatus: null
      }
    case IMAGE_FAILURE:
      return {
        ...state,
        fetching: false,
        /* errorMessage: action.data.message,
        errorStatus: action.data.code */
      }
    case IMAGE_RESET:
      return {
        ...state,
        fetching: false,
        fetched: false,
        data: null
      }
    default:
      return state;
  }
}

export const relatedimages = function(state = INITIAL_STATE, action: any) {
  switch(action.type) {
    case RELATED_IMAGES_REQUEST:
      return {
        ...state,
        fetching: true
      }
    case RELATED_IMAGES_SUCCESS:
      return {
        ...state,
        fetching: false,
        fetched: true,
        data: action.data,
        errorMessage: null,
        errorStatus: null
      }
    case RELATED_IMAGES_FAILURE:
      return {
        ...state,
        fetching: false,
        /* errorMessage: action.data.message,
        errorStatus: action.data.code */
      }
    case RELATED_IMAGES_RESET:
      return {
        ...state,
        fetching: false,
        fetched: false,
        data: null
      }
    default:
      return state;
  }
}