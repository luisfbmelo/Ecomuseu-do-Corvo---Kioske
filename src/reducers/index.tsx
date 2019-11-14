import { combineReducers } from 'redux';

//  =================================
//  Reducers
//  =================================
import videos from './videos';

const appReducer = combineReducers({
  videos
})

const rootReducer = (state: any, action: any) => {
  if (action.type === 'RESET_APP') {
    state = undefined
  }

  return appReducer(state, action)
}

export default rootReducer;