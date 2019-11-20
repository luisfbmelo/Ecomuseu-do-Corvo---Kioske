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
} from './action-types';

import { CALL_API } from 'middleware/api';

//	=======================================================
//	Utils
//	=======================================================
import { toQueryString } from 'utils/strings';


//	=======================================================
//	Images list
//	=======================================================
export function fetchImages(filters?: any){
	let finalString = toQueryString(filters);

	return {
		[CALL_API]: {
			endpoint: `arquivos${finalString}`,
			types: [IMAGES_REQUEST, IMAGES_SUCCESS, IMAGES_FAILURE]
		}
	}
}

//  Clear images list
export function resetImages(){

	return {
		type: IMAGES_RESET
	}
}

//	=======================================================
//	SINGLE IMAGE
//	=======================================================
export function fetchImageDetails(id: string, filters?: any){
	let finalString = toQueryString(filters);

	return {
		[CALL_API]: {
			endpoint: `arquivos/${id}${finalString}`,
			types: [IMAGE_REQUEST, IMAGE_SUCCESS, IMAGE_FAILURE]
		}
	}
}

//  Clear images list
export function resetImage(){

	return {
		type: IMAGE_RESET
	}
}

//	=======================================================
//	Related mages list
//	=======================================================
export function fetchRelatedImages(filters?: any){
	let finalString = toQueryString(filters);

	return {
		[CALL_API]: {
			endpoint: `arquivos${finalString}`,
			types: [RELATED_IMAGES_REQUEST, RELATED_IMAGES_SUCCESS, RELATED_IMAGES_FAILURE]
		}
	}
}

//  Clear images list
export function resetRelatedImages(){
	return {
		type: RELATED_IMAGES_RESET
	}
}