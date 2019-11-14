import styled from 'styled-components';

export const HomeNav = styled.nav`
  position: absolute;
  bottom:0;
  left:0;
  width:100%;
  font-family: ${props => props.theme.types.title};

  ul{
    list-style:none;
    display: flex;
    align-items: center;

    padding:0;
    margin:0;
    

    li{
      display: inline-block;
      flex-grow: 1;
      width: ${100/3}%;
      height:30vh;

      & + li{
        border-left:1px solid ${props => props.theme.brown}
      }

      a{
        display: flex;
        text-decoration: none;
        background-color: ${props => props.theme.primary};
        color: ${props => props.theme.brown};
        align-items: center;
        height: 100%;

        transition: all 0.3s ease;

        svg path{
          fill: ${props => props.theme.brown};
          transition: all 0.2s ease;
        }  

        &:hover,
        &:active,
        &:focus,
        &.active{
          background-color: ${props => props.theme.brown};
          color: ${props => props.theme.primary};

          svg path{
            fill: ${props => props.theme.primary};
          }     
        }
      }

      div{
        width: 100%;
      }

      img{
        margin:0 auto;
      }

      span{
        display: block;
        margin-top:35px;
        font-size: 3.7vmin;
      }
    }
  }
`