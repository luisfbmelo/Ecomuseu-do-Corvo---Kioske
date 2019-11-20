import Slider from "react-slick";

import styled from 'styled-components';

export default styled(Slider)`
  width:80%;

  margin:0 auto;

  /* position:absolute;
  top:50%;
  left:50%; 

  transform: translate(-50%, -40%);*/

  /* Slide element */
  .slick-slide{
    width:25vw;
    height:25vw;
    padding: 30px 0!important;
    transition: all 0.3s ease;
    /* transition-delay: 300ms; */

    & > div{
      height:100%;
      width: 100%;
      display: flex;
      align-items: center;
    }

    a{
      display: block!important;
      height: 60%!important;
      width: 100%!important;
      margin: 0 auto;
      transition: all 0.3s ease;
      /* transition-delay: 300ms; */
      
      text-decoration: none;
      outline: none;

      /* &:hover{
        filter: brightness(150%);
      } */

      .img-container{
        width:100%;
        height:90%;
        background-repeat: no-repeat;
        background-size: cover;
        box-shadow: 0 0 10px 3px #000000CC;
      }

      h3{
        margin:0;
        padding:15px;
        color: white;
        font-size: 1.8vmin;
        font-weight:300;
        text-align: center;
      }
    }

    &.slick-center{
      a{
        transform: scale(1.4);
        filter: brightness(125%);
      }

      &.slick-current{
        position:relative;
        z-index: 9999;

        & ~ .slick-slide:not(.slick-center){
          transform: translateX(-1vw) perspective(400px) rotateY(-20deg);
        }
      }
    }

    &:not(.slick-center){
      transform: translateX(1vw) perspective(400px) rotateY(20deg);
      filter: brightness(70%);

      h3{
        font-size: 1.5vmin;
      }
    }

    /* &:not(.slick-active){
      opacity: 0;
    } */
  }

  /* Slick container */
  .slick-arrow{

    &:before{
      font-size: 5vmin;
      color: ${props => props.theme.primary};

      transition: all 0.3s ease;
    }
    
  }

  .slick-prev{
    left: -10vmin;
  }

  .slick-next{
    right: -10vmin;
  }

 
`

//  =====================================================
//  Generic gallery with Slick
//  =====================================================
export const GenericSlider = styled(Slider)`
  width: 100%;
  height: 150px;
  padding-top:20px;

  .slick-list,
  .slick-track{
    height:100%;
  }

  .slick-slide{
    width:185px;
    height:100%;
    transition: all 0.3s ease;
    /* transition-delay: 300ms; */
    padding: 0 15px;

    & > div{
      height:100%;
      width: 100%;
      display: flex;
      align-items: center;
      
    }

    a{
      display: block!important;
      height: 100%!important;
      width: 100%!important;
      margin: 0 auto;
      transition: all 0.3s ease;
      /* transition-delay: 300ms; */
      
      text-decoration: none;
      outline: none;

      .img-container{
        width:100%;
        height:100%;
        background-repeat: no-repeat;
        background-size: cover;
      }
    }
  }

`