import React from 'react';
import { Component } from 'react';



//  ==============================================
//  Styles
//  ==============================================
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from 'assets/theme/globalStyle';

//  ==============================================
//  Components
//  ==============================================
import Loading from 'containers/common/loading';

//  ==============================================
//  Utils
//  ==============================================
const electron = window.require("electron");
const { ipcRenderer } = electron;

export default class Empty extends Component {

  resetApp = () => {
    console.log("RESET NOW");
  }

  showResetWarning = () => {
    console.log("WILL RESET IN 5");
  }

  updateAvailable = () => {
    console.log("UPDATE AVAILABLE");
  }

  updateDownloaded = () => {
    console.log("UPDATE DOWNLOADED");
  }

  componentDidMount() {
      ipcRenderer.on('reset:warn', this.showResetWarning);
      ipcRenderer.on('reset:command', this.resetApp);
      ipcRenderer.on('update:available', this.updateAvailable);
      ipcRenderer.on('update-downloaded', this.updateDownloaded);
  }

  componentWillUnmount() {
      ipcRenderer.removeListener('reset:warn', this.showResetWarning);
      ipcRenderer.removeListener('reset:command', this.resetApp);
      ipcRenderer.removeListener('update:available', this.updateAvailable);
      ipcRenderer.removeListener('update:downloaded', this.updateDownloaded);
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Loading />
        {this.props.children}
      </ThemeProvider>
    );
  }
}
