import styled from 'styled-components';

//  ============================================
//  Helpers
//  ============================================
import {hexToRgbA} from 'assets/theme/helpers/functions';

export default styled.section`
  width:100%;

  display: flex;
  align-items: center;
  
  ul{
    text-align: center;
    list-style:none;
    margin:0;
    padding:0;
    width:100%;

    li{
      display:inline-block;

      padding:0 5px;

      button{
        border-radius: 5px;
        padding: 15px 20px;
        margin:0;
        border:none;
        transition: all 0.2s ease;
        opacity: 0.7;
        
        background-color: '#e0e0e0';

        &:hover{                
          background-color: '#ffffff';
          box-shadow: 0px 1px 8px 0px #00000090;   
          cursor:pointer;
          opacity: 1;
        }
      }

      &.active{
        button{
          opacity: 1;

          background-color: ${() => hexToRgbA('#ffffff', 1)};
          box-shadow: 0px 1px 8px 0px #00000090;
        }
      }

      .lang{
        &-key,
        &-name{
          display:inline-block;
        }

        &-key{
          background-color: gray;
          text-transform: uppercase;
          color: white;
          border-radius: 5px;
          padding:5px 10px;
          margin-right:10px;
        }

        &-name{
          color: ${props => props.theme.brown};
          font-family: ${props => props.theme.types.titles};
          font-weight:700;
          
        }
      }
    }
  }
`