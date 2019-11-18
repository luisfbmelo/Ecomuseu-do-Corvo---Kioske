import { 
	CATS_REQUEST, 
	CATS_SUCCESS,
	CATS_FAILURE,
  CATS_RESET
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
    case CATS_REQUEST:
      return {
        ...state,
        fetching: true
      }
    case CATS_SUCCESS:
      return {
        ...state,
        fetching: false,
        fetched: true,
        data: action.data,
        errorMessage: null,
        errorStatus: null
      }
    case CATS_FAILURE:
      return {
        ...state,
        fetching: false,
        errorMessage: action.data.message,
        errorStatus: action.data.code
      }
    case CATS_RESET:
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