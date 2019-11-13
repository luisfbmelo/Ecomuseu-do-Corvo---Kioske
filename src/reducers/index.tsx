import { combineReducers } from 'redux';

//  =================================
//  Reducers
//  =================================
import videos from './videos';

const rootReducer = combineReducers({
  videos
}); 

export default rootReducer;