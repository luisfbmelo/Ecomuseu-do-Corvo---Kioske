import styled from 'styled-components';

export const MainNav = styled.nav`
  position: absolute;
  top:0;
  left:0;
  height:100vh;
  width: 10vw;
  font-family: ${props => props.theme.types.title};
  background-color: ${props => props.theme.primary};

  display:flex;
  align-items: center;
  

  ul{
    list-style:none;
    text-align: center;
    margin:0;
    padding:0;

    width:100%;
  }

  a{
    display: block;
    color: ${props => props.theme.brown};
    text-decoration: none;
    padding: 15px 0;

    transition: all 0.2s ease;

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

  span{
    display: block;
    margin-top: 30px; 
    font-size: 2vmin;
  }
`