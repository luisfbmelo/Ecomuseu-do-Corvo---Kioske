import styled from 'styled-components';


//  ============================================
//  Helpers
//  ============================================
import {hexToRgbA} from 'assets/theme/helpers/functions';

export default styled.section`
  background-color: ${props => hexToRgbA(props.theme.blackBackground, 0.6)};
  position: absolute;
  left:0;
  bottom:0;
  width:100%;

  padding: 20px 0;

  &:before,
  &:after{
    content:"";
    position:absolute;    
    z-index:9;
    top:0;
    width:20px;
    height:100%;
  }

  &:before{
    left:0;
    background: linear-gradient(270deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.577468487394958) 100%);
  }

  &:after{
    right:0;
    background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.577468487394958) 100%);
  }

  div{
    color: white;
    span{
      font-family: ${props => props.theme.types.title};
      font-size: 2vmin;
      font-weight: 300;
      user-select: none;
    }

    i{
      padding:0 30px;
      color: ${props => props.theme.primary};
      font-size: 2vmin;
      transition: all 0.3s ease;

      &:hover{
        cursor: pointer;
        transform: scale(1.1);
      }
    }
  }
`