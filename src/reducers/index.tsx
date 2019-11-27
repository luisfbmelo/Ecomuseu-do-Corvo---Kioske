import { combineReducers } from 'redux';

//  =================================
//  Reducers
//  =================================
import videos from './videos';
import categories, { category } from './cats';
import images, { image, relatedimages } from './images';
import loading from './loading';
import info from './info';
import settings from './settings';

const appReducer = combineReducers({
  videos,
  categories,
  category,
  images,
  image,
  relatedimages,
  loading,
  info,
  settings
})

const rootReducer = (state: any, action: any) => {
  if (action.type === 'RESET_APP') {
    state = undefined
  }

  return appReducer(state, action)
}

export default rootReducer;