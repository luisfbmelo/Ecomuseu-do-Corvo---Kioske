import styled from 'styled-components';

//  ============================================
//  Helpers
//  ============================================
import {hexToRgbA} from 'assets/theme/helpers/functions';

export default styled.div`
  position:relative;
  height:100%;
  
  h1, h2{    
    text-align: center;
    color: white;
  }

  h1{
    padding-top: 70px;
    font-size: 5vmin;
  }
  
  h2{
    font-weight: 300;
    font-size: 2vmin;
  }
`

export const VideosListStyled = styled.ul`
  display: flex;
  list-style: none;
  margin: 50px 0;
  padding:0 50px;
  flex-wrap: wrap;

  &::-webkit-scrollbar { 
    display: none; 
  }

  article{
    width: ${100/3}%;
    height:18vmax;
    position: relative;
    transition: all 0.3s ease;
    padding: 15px;

    &:hover{        
        cursor:pointer;
        .thumb-wrapper{
          box-shadow: 0px 1px 8px 5px #00000060;
        } 

        .video-trigger{
          color: ${props => props.theme.primary};
          background-color: ${props => props.theme.brown};
        }
      }

    .thumb-wrapper{
      transition: all 0.3s ease;  
    }

    .video-trigger{
      position: absolute;
      top:50%;
      left: 50%;
      transform: translate(-50%, -50%);
      box-shadow: 0px 1px 8px 5px #00000050;
      padding:20px;
      border-radius: 100%;
      line-height:0;
      color: ${props => props.theme.brown};
      background-color: ${props => hexToRgbA(props.theme.primary, 0.9)};
      transition: all 0.3s ease;
    }
  }
`

export const VideoImageWrapper = styled.div`
  background-image: url("${(props: { bgimage?: string }) => props.bgimage || ''}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

  height:100%;
  width: 100%;
`