import React from 'react';

//  ==============================================
//  Styles
//  ==============================================
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from 'assets/theme/globalStyle';

//  ==============================================
//  Components
//  ==============================================
import Loading from 'containers/common/loading';
import Updater from 'components/common/updater';
import AppReset from 'containers/common/resetApp';

export default (props: any) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Loading />
    {props.children}
    <Updater />
    <AppReset />
  </ThemeProvider>
)
