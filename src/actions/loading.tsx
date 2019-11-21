import {
  LOADING_START,
  LOADING_END
} from './action-types';


export function startLoading(){

	return {
		type: LOADING_START
	}
}

export function stopLoading(){

	return {
    type: LOADING_END
  }
}