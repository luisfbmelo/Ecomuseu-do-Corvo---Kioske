import { 
  VIDEOS_REQUEST,
  VIDEOS_SUCCESS,
  VIDEOS_FAILURE,
	VIDEOS_RESET
} from './action-types';

import { CALL_API } from 'middleware/api';

//	=======================================================
//	Utils
//	=======================================================

//	=======================================================
//	Images list
//	=======================================================
export function fetchVideos(){

	return {
		[CALL_API]: {
			endpoint: `testemunhos`,
			types: [VIDEOS_REQUEST, VIDEOS_SUCCESS, VIDEOS_FAILURE]
		}
	}
}

//  Clear images list
export function resetVideos(){

	return {
		type: VIDEOS_RESET
	}
}