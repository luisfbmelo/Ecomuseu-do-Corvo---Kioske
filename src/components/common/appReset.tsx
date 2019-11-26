import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

//  ==============================================
//  Styles
//  ==============================================
import GenericModal from 'assets/theme/components/common/genericModalStyle';

//  ==============================================
//  Utils
//  ==============================================
const electron = window.require("electron");
const { ipcRenderer } = electron;

//  ============================================
//  Interface
//  ============================================
interface IProps{
  resetApp: () => void;
}

interface IState{
  isOpen: boolean;
  resetIn: number;
}

export default class AppReset extends Component<IProps, IState>{
  initState: { isOpen: boolean; resetIn: number; };

  constructor(props: IProps) {
    super(props);
    
    this.initState = {
      isOpen: false,
      resetIn: 0
    }

    this.state = this.initState;
  }

  componentDidMount() {
      ipcRenderer.on('reset:warn', this.showResetWarning);
      ipcRenderer.on('reset:command', this.resetApp);
      ipcRenderer.on('reset:invalid', this.resetInvalid);
  }

  componentWillUnmount() {
      ipcRenderer.removeListener('reset:warn', this.showResetWarning);
      ipcRenderer.removeListener('reset:command', this.resetApp);
      ipcRenderer.removeListener('reset:invalid', this.resetInvalid);
  }

  resetApp = () => {
    console.log("RESET NOW");
    this.props.resetApp();
    ipcRenderer.send('reset:reload');
  }

  showResetWarning = (event: any, timeToReset: any) => {
    console.log("WILL RESET IN "+timeToReset);
    this.setState({
      resetIn: timeToReset,
      isOpen: true
    });
  }

  resetInvalid = () => {
    if(this.state.isOpen)
      this.setState(this.initState);
  }

  render() {
    if(!this.state.isOpen){
      return null
    }

    return (
      ReactDOM.createPortal(
        <GenericModal>
          <p>O utilizador encontra-se em inatividade por um longo período de tempo.</p>
          <p>A aplicação irá reiniciar dentro de {this.state.resetIn} segundos.</p>
        </GenericModal>,
        document.body
      )
    )
  }
}