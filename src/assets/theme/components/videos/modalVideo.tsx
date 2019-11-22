import styled from 'styled-components';

//  ============================================
//  Helpers
//  ============================================
import {hexToRgbA} from 'assets/theme/helpers/functions';

export default styled.div`

  background-color: ${props => hexToRgbA(props.theme.blackBackground, 0.9)};

  position: fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;

  .modal-video-body {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: table;
  }

  .modal-video-inner {
    display: table-cell;
    vertical-align: middle;
    width: 100%;
    height: 100%;
  }

  .modal-video-movie-wrap {
    width: 100%;
    height: 100%;
    position: relative;
    padding-bottom: 0!important;
    animation-timing-function: ease-out;
    animation-duration: .3s;
    animation-name: modal-video-inner;
    transform: translate(0, 0);
    transition: transform .3s ease-out;
  }

  .modal-video-close-btn {
    position: fixed;
    z-index: 2;
    top: 20px;
    right: 20px;
    display: inline-block;
    width: 50px;
    height: 50px;
    overflow: hidden;
    border: none;
    background: ${props => props.theme.primary};
    border-radius:100%;
    transition: all 0.3s ease;

    &:hover{
      cursor: pointer;
      background: ${props => props.theme.brown};

      &:before,
      &:after {
        background: ${props => props.theme.primary};
      }
    }

    &:before,
    &:after {
      content: '';
      position: absolute;
      height: 3px;
      width: 60%;
      top: 50%;
      left: 10px;
      background: ${props => props.theme.brown};
      border-radius: 5px;
      margin-top: -2px;
      transition: all 0.3s ease;
    }

    &:before {
      transform: rotate(45deg);
    }

    &:after {
      transform: rotate(-45deg);
    }
  }

  .modal-video-movie-wrap iframe {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    height: 90%;
  }

  webview{
    width: 100%;
    height: 100%;
    padding: 50px;
  }
  
`