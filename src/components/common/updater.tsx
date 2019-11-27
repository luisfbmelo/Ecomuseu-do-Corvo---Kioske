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
}

interface IState{
  didUpdate: boolean;
  isOpen: boolean;
  progress: number;
}

export default class Updater extends Component<IProps, IState>{
  constructor(props: IProps) {
    super(props);
    
    this.state = {
      didUpdate: false, // MUST BE FALSE AS DEFAULT
      isOpen: false,
      progress: 0
    }
  }

  componentDidMount() {
    ipcRenderer.on('update:available', this.updateAvailable);
    ipcRenderer.on('update:downloaded', this.updateDownloaded);
    ipcRenderer.on('update:progress', this.updateProgress);
  }

  componentWillUnmount() {
      ipcRenderer.removeListener('update:available', this.updateAvailable);
      ipcRenderer.removeListener('update:downloaded', this.updateDownloaded);
      ipcRenderer.removeListener('update:progress', this.updateProgress);
  }

  closeModal = () => {
    this.setState({
      isOpen: false
    })
  }
  

  updateAvailable = () => {
    console.log("UPDATE AVAILABLE");
    this.setState({
      isOpen: true,
      didUpdate: false,
      progress: 0
    })
  }

  //  During download progress
  updateProgress = (event: any, progressObj: any) => {
    console.log("UPDATE PROGRESS");
    let log_message = "Download speed: " + progressObj.bytesPerSecond;
    log_message = log_message + ' - Downloaded ' + progressObj.percent + '%';
    log_message = log_message + ' (' + progressObj.transferred + "/" + progressObj.total + ')';
    console.log(log_message);

    this.setState({
      progress: progressObj.percent
    });
  }

  //  Update was downloaded
  updateDownloaded = () => {
    console.log("UPDATE DOWNLOADED");
    this.setState({
      didUpdate: true
    })
  }

  //  Submit restart
  restartApp = () => {
    ipcRenderer.send('app:restart');
  }

  printMessage = () => {
    if(!this.state.didUpdate){
      return (
        <Fragment>
          <p>A aplicação possui uma atualização.</p>
          <p>A descarregar: {this.state.progress}%</p>
        </Fragment>
      )
    }

    return (
      <Fragment>
        <p>Atualização descarregada. Será instalada depois de reiniciar.</p>
        <p>Reiniciar agora?</p>
      </Fragment>
    )
  }

  render() {
    if(!this.state.isOpen){
      return null
    }

    return (
      ReactDOM.createPortal(
        <GenericModal>
          {this.printMessage()}
          <button type="button" onClick={this.closeModal}>Fechar</button>
          {this.state.didUpdate && 
            <button type="button" onClick={this.restartApp}>Reiniciar</button>
          }
        </GenericModal>,
        document.body
      )
    )
  }
}