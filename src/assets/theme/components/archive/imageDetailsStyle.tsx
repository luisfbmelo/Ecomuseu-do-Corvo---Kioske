import styled from 'styled-components';


//  ============================================
//  Helpers
//  ============================================
import {hexToRgbA} from 'assets/theme/helpers/functions';

export default styled.section`
  height:100%;
  width: 25vw;
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
`

export const ImageMetaStyled = styled.section`
  padding: 30px 50px 0;
  color:white;
  height:calc(100% - 100px - 50px);
  overflow-y: auto;

  &::-webkit-scrollbar { 
    display: none; 
  } 

  article{
    margin-bottom:50px;
    line-height:1.6;
  }
`