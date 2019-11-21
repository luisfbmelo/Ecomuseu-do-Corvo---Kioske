import { 
	LOADING_START, 
	LOADING_END,
} from 'actions/action-types';

const INITIAL_STATE = { status: false };

export type INITIAL_TYPE = {
  status: boolean
}


export default function(state = INITIAL_STATE, action: any) {
  switch(action.type) {
    case LOADING_START:
      return {
        ...state,
        status: true
      }
    case LOADING_END:
      return {
        ...state,
        status: false
      }
    default:
      return state;
  }
}