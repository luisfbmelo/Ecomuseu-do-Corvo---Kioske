import { 
	INFO_REQUEST, 
	INFO_SUCCESS,
	INFO_FAILURE,
  INFO_RESET,
  INFO_VIEWED_SET,
  INFO_VIEWED_RESET
} from 'actions/action-types';

const INITIAL_STATE = {
  fetching: false,
  fetched: false,
  data: null,
  viewed: {},
  errorMessage: null,
  errorStatus: null
};

export type INITIAL_TYPE = {
  fetching: boolean
  fetched: boolean
  data: any
  viewed: any
  errorMessage: string
  errorStatus: string
}

export default function(state = INITIAL_STATE, action: any) {
  switch(action.type) {
    case INFO_REQUEST:
      return {
        ...state,
        fetching: true
      }
    case INFO_SUCCESS:
      return {
        ...state,
        fetching: false,
        fetched: true,
        data: action.data,
        errorMessage: null,
        errorStatus: null
      }
    case INFO_FAILURE:
      return {
        ...state,
        fetching: false,
        /* errorMessage: action.message,
        errorStatus: action.status */
      }
    case INFO_VIEWED_SET:
      return {
        ...state,
        viewed: {
          ...state.viewed,
          [action.viewed]: true
        }
      }
    case INFO_VIEWED_RESET:
      return {
        ...state,
        viewed: {}
      }
    case INFO_RESET:
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

