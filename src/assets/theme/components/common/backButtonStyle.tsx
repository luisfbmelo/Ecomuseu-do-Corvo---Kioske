import styled from 'styled-components';
import { Link } from 'react-router-dom';

//  ============================================
//  Helpers
//  ============================================
import {hexToRgbA} from 'assets/theme/helpers/functions';

export default styled(Link)`
  display: block;
  
  color: white;
  font-family: ${props => props.theme.types.title};
  text-decoration: none;

  font-size: 2vmin;

  box-shadow: 0px 1px 8px 0px #00000059;

  display: flex;
  align-items: center;
  transition: all 0.3s ease;

  &:hover{
    background-color: ${props => props.theme.blackBackground};
  }

  span{
    display: block;

    padding:0 35px;

    &.icon{
      padding:0;
      width:100px;
      height:100px;
      display: flex;
      text-align: center;
      align-items: center;
      background-color: ${props => props.theme.blackBackground};
      font-size: 3vmin;

      i{
        width: 100%;
      }
    }
  }
`