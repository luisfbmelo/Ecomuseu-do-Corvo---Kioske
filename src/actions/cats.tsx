import { 
  CATS_REQUEST,
  CATS_SUCCESS,
  CATS_FAILURE,
  CATS_RESET
} from './action-types';

//  Get categories list
import { CALL_API } from 'middleware/api';

export function fetchCats(){
	return {
		[CALL_API]: {
			endpoint: 'categorias',
			types: [CATS_REQUEST, CATS_SUCCESS, CATS_FAILURE]
		}
	}
}

//  Clear categories list
export function resetCats(){

	return {
		type: CATS_RESET
	}
}