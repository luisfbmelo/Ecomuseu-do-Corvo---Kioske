import styled from 'styled-components';

//  ============================================
//  Helpers
//  ============================================
import {hexToRgbA} from 'assets/theme/helpers/functions';

export default styled.div`
  width: 90vw;
  height:100%;
  position: fixed;
  top: 0;
  left: 10vw;
  background-color: ${props => hexToRgbA(props.theme.blackBackground, 0.98)};
  color: white;
  padding: 90px;
  z-index: 999;
  box-shadow: 0px 1px 8px 0px #00000059;
  
  h1{
    margin-top:0;
    font-weight:400;
    margin-bottom:70px;
  }

  p{
    line-height:2;
    font-size: 1.9vmin;
  }

  button{
    margin:90px auto 0;
    display: block;
    padding: 20px 30px;
    background: ${props => props.theme.primary};
    transition: all 0.3s ease;
    border-radius: 50px;
    color: ${props => props.theme.brown};    
    font-family: ${props => props.theme.types.title};
    font-weight: 600;
    font-size: 2vmin;
    border: none;

    i{
      margin-left:15px;
    }

    &:hover{
      background: ${props => props.theme.brown};
      color: ${props => props.theme.primary};
      cursor: pointer;
    }
  }
`