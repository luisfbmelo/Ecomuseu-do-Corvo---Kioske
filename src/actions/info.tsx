import { 
  INFO_REQUEST,
  INFO_SUCCESS,
  INFO_FAILURE,
	INFO_RESET,
	INFO_VIEWED_SET,
  INFO_VIEWED_RESET
} from './action-types';

import { CALL_API } from 'middleware/api';

//	=======================================================
//	Utils
//	=======================================================
import { toQueryString } from 'utils/strings';

//	=======================================================
//	Info list
//	=======================================================
export function fetchInfo(filters?: any){
	let finalString = toQueryString(filters);

	return {
		[CALL_API]: {
			endpoint: `infos${finalString}`,
			types: [INFO_REQUEST, INFO_SUCCESS, INFO_FAILURE]
		}
	}
}

//	Set viewed
export function setViewed(type: string){

	return {
		type: INFO_VIEWED_SET,
		viewed: type
	}
}

//	Reset viewed
export function resetViewed(){

	return {
		type: INFO_VIEWED_RESET
	}
}

//  Clear info list
export function resetInfo(){

	return {
		type: INFO_RESET
	}
}