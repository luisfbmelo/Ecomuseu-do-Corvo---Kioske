import styled from 'styled-components';

import {hexToRgbA} from 'assets/theme/helpers/functions';

export default styled.section`
  height:100%;
  width:25vw;
  background-color: ${props => hexToRgbA(props.theme.blackBackground, 0.75)};

  ul{
    list-style:none!important;

    li{
      a{

      }
    }
  }
`