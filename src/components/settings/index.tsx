import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';

//  ============================================
//  Styles
//  ============================================
import SettingsStyled from 'assets/theme/components/settings/settingsStyle';

//  ============================================
//  Components
//  ============================================
import Backbutton from 'components/common/backButton';
import OptionsList from 'components/settings/list';

//  ============================================
//  Types
//  ============================================
import { INITIAL_TYPE } from 'reducers/settings';

//  ==============================================
//  Utils
//  ==============================================
const electron = window.require("electron");
const { ipcRenderer } = electron;

//  ============================================
//  Interface
//  ============================================
interface IProps extends RouteComponentProps{
  setSetting: (key: string, value: any) => void;
  setSettings: (data: any) => void;
  receiveUpdateSettings: (event: any, data: any) => void;
  updateSettings: () => void;
  resetSettings: () => void;
  settings: INITIAL_TYPE;
}

interface IState{
}


export default class Settings extends Component<IProps, IState>{
  componentDidMount() {
    ipcRenderer.on('settings:receive', this.props.receiveUpdateSettings);
    this.props.updateSettings();
  }

  componentWillUnmount() {
    ipcRenderer.removeListener('settings:receive', this.props.receiveUpdateSettings);
  }

  resetApp = (evt:any) => {
    ipcRenderer.send('reset:reload');
  }

  handleResetTimeChange = (evt: { value: number, label: string}) => {
    this.props.setSetting('resettime', evt.value );
  }
  
  render(){
    const { resettime } = this.props.settings.data;

    return (
      <SettingsStyled>
        <Backbutton prevLink={this.props.location.state ? this.props.location.state.prevPath : '/'}>
          Voltar
        </Backbutton>
        <OptionsList 
          resetAppHandler={this.resetApp}
          resetTime={resettime}
          onResetTimeChange={this.handleResetTimeChange}
          />
      </SettingsStyled>
    )
  }
}