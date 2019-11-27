import { 
  SETTINGS_SET,
  SETTING_SET,
  SETTINGS_UPDATE_RECEIVE,
  SETTINGS_UPDATE_REQUEST,
	SETTINGS_RESET
} from './action-types';

//  ==============================================
//  Utils
//  ==============================================
const electron = window.require("electron");
const { ipcRenderer } = electron;

//	=======================================================
//	Settings
//	=======================================================
//  Update settings from Electron Main
export function receiveUpdateSettings(event: any, data: any){
  return {
    type: SETTINGS_UPDATE_RECEIVE,
    data
  }
}

export function updateSettings(){
  //  Request settings to Electron
  ipcRenderer.send('settings:request');

  return {
		type: SETTINGS_UPDATE_REQUEST,
	}
}

//  Set settings
export function setSettings(data: any){

	return {
		type: SETTINGS_SET,
    data
	}
}

export function setSetting(key: string, value: any){
  //  Request settings to Electron
  ipcRenderer.send('settings:set', {key, value});

	return {
		type: SETTING_SET,
    key,
    value
	}
}

//	Reset
export function resetSettings(){

	return {
		type: SETTINGS_RESET
	}
}