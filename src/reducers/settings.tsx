import { 
  SETTINGS_SET,
  SETTING_SET,
  SETTINGS_UPDATE_RECEIVE,
  SETTINGS_UPDATE_REQUEST,
  SETTINGS_RESET
} from 'actions/action-types';

const INITIAL_STATE = {
  data: {},
  updating: false
};

export type INITIAL_TYPE = {
  data: any,
  updating: boolean
}

export default function(state = INITIAL_STATE, action: any) {
  switch(action.type) {
    //  Update settings from electron
    case SETTINGS_UPDATE_REQUEST:
      return {
        ...state,
        updating: true
      }
    case SETTINGS_UPDATE_RECEIVE:
      return {
        ...state,
        data: action.data,
        updating: false
      }
    //  Set settings
    case SETTINGS_SET:
      return {
        ...state,
        data: action.data
      }
    //  Set single setting
    case SETTING_SET:
      return {
        ...state,
        data: {
          ...state.data,
          [action.key]: action.value
        }
      }
    //  Reset settings to nothing
    case SETTINGS_RESET:
      return {
        ...state,
        data: {}
      }
    default:
      return state;
  }
}

