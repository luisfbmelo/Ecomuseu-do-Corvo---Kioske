import React from 'react';
import { Component } from 'react';

//  ==============================================
//  Styles
//  ==============================================
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from 'assets/theme/globalStyle';

export default class Empty extends Component {
  constructor(props: any){
    super(props);

  }

  resetApp = () => {

  }

  showResetWarning = () => {

  }

  componentDidMount() {
    /* if(window && window.ipcRenderer){
      window.ipcRenderer.on('reset:warn', this.showResetWarning);
      window.ipcRenderer.on('reset:command', this.resetApp);
    } */
  }

  componentWillUnmount() {
    /* if(window && window.ipcRenderer){
      window.ipcRenderer.removeListener('reset:warn', this.showResetWarning);
      window.ipcRenderer.removeListener('reset:command', this.resetApp);
    } */
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {this.props.children}
      </ThemeProvider>
    );
  }
}
