import { 
  CATS_REQUEST,
  CATS_SUCCESS,
  CATS_FAILURE,
	CATS_RESET,
	CAT_REQUEST,
  CAT_SUCCESS,
  CAT_FAILURE,
  CAT_RESET
} from './action-types';

//  Get categories list
import { CALL_API } from 'middleware/api';

//	=======================================================
//	Utils
//	=======================================================
import { toQueryString } from 'utils/strings';

//	=======================================================
//	Cats list
//	=======================================================
export function fetchCats(filters?: any){
	let finalString = toQueryString(filters);

	return {
		[CALL_API]: {
			endpoint: `categorias${finalString}`,
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

//	=======================================================
//	SINGLE CAT
//	=======================================================
export function fetchCategory(id: string, filters?: any){
	let finalString = toQueryString(filters);

	return {
		[CALL_API]: {
			endpoint: `categorias/${id}${finalString}`,
			types: [CAT_REQUEST, CAT_SUCCESS, CAT_FAILURE]
		}
	}
}

//  Clear categories list
export function resetCategory(){

	return {
		type: CAT_RESET
	}
}