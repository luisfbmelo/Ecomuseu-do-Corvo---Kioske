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
        background-color: white;
        border-radius: 5px;
        padding: 15px 20px;
        margin:0;
        border:none;
        transition: all 0.2s ease;
        box-shadow: 0px 1px 8px 0px #00000059;

        &:hover{
          background-color: ${props => hexToRgbA('#ffffff', 0.6)};          
          cursor:pointer;
        }
      }

      &.active{
        button{
          background-color: ${props => props.theme.primary};

          .lang-key{
            background-color: ${props => hexToRgbA(props.theme.brown, 0.5)};
          }
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