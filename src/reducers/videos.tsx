import { 
	VIDEOS_REQUEST, 
	VIDEOS_SUCCESS,
	VIDEOS_FAILURE,
  VIDEOS_RESET
} from 'actions/action-types';

const INITIAL_STATE = { fetching: false, fetched: false, data: null, errorMessage: null, errorStatus: null, nextPageToken: null, prevPageToken: null, pageInfo: null };

export default function(state = INITIAL_STATE, action: any) {
  switch(action.type) {
    case VIDEOS_REQUEST:
      return {
        ...state,
        fetching: true
      }
    case VIDEOS_SUCCESS:
      return {
        ...state,
        fetching: false,
        fetched: true,
        data: action.data.result,
        errorMessage: null,
        errorStatus: null
      }
    case VIDEOS_FAILURE:
      return {
        ...state,
        fetching: false,
        errorMessage: action.message,
        errorStatus: action.status
      }
    case VIDEOS_RESET:
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

