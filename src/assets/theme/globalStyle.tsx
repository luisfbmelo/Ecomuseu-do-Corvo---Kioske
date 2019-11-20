import { createGlobalStyle } from 'styled-components';

//  ==========================================================================
//  Generic imports
//  ==========================================================================
import * as variables from './global/variables';

//  ==========================================================================
//  Extended styles
//  ==========================================================================
import headingsStyles from './global/headings';
import containersStyles from './global/containers';
import textStyles from './global/text';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: ${props => props.theme.types.body};
    overflow: hidden;
  }
  
  /* HEADINGS */
  ${headingsStyles}

  /* APP CONTAINERS */
  ${containersStyles}

  /* TEXT */
  ${textStyles}
  
`

export const theme = {
  ...variables.colors,
  types: variables.typography
}