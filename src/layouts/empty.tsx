import React from 'react';
import { Component } from 'react';

//  ==============================================
//  Styles
//  ==============================================
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from 'assets/theme/globalStyle';

export default class Empty extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {this.props.children}
      </ThemeProvider>
    );
  }
}
