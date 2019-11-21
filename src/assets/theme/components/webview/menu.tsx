import styled from 'styled-components';

export default styled.nav`
  width: 100%;
  height: 60px;
  background-color: ${props => props.theme.blackBackground};
  display: flex;
  align-items: center;

  ul{
    list-style:none;
    margin:0;
    padding: 0 15px;

    li{
      display: inline;
      margin: 0 5px;

      button{
        background: none;
        border: none;
        color: white;
        padding: 10px;
        transition: all 0.5s ease;
        outline: none;
        width:40px;
        height:40px;
        border-radius: 100%;

        &.disabled{
          opacity: 0.2;
        }

        &:not(.disabled):hover{
          cursor: pointer;
          background-color: #353535;          
        }

        i{
          font-size: 2vmin;
        }
      }
    }
  }
`