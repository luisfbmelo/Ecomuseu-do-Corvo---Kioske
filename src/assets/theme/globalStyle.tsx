import { createGlobalStyle } from 'styled-components';

//  ==========================================================================
//  Generic imports
//  ==========================================================================
import * as variables from './global/variables';

//  ==========================================================================
//  Extended styles
//  ==========================================================================
import headingsStyles from './global/headings';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: ${props => props.theme.types.body};
  }
  
  /* HEADINGS */
  ${headingsStyles}
`

export const theme = {
  ...variables.colors,
  types: variables.typography
}