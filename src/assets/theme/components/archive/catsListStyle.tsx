import styled from 'styled-components';

//  ============================================
//  Helpers
//  ============================================
import {hexToRgbA} from 'assets/theme/helpers/functions';

export default styled.section`
  height:100%;
  width: 20vw;
  background-color: ${props => hexToRgbA(props.theme.blackBackground, 0.6)};
  
  position: relative;

  &:after{
    content:"";
    position:absolute;
    left:0;
    bottom:0;
    width:100%;
    height:20px;

    background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.577468487394958) 100%);
  }
  
  ul{
    list-style:none!important;
    margin: 0;
    padding: 0 0 20px 0;
    overflow-y: auto;
    height: calc(100vh - 100px);
    font-family: ${props => props.theme.types.title};

    &::-webkit-scrollbar { 
      display: none; 
    } 

    li{
      font-size: 2vmin;

      a,
      span{
        display: block;
        padding: 35px 50px;
        color:white;
        line-height:1.5;
        text-decoration:none;
        transition: all 0.3s ease;
      }

      &.active,
      a:hover,
      a:focus,
      a:active{
        background-color: ${props => props.theme.blackBackground};
        cursor: pointer;
      }
    }
  }
`