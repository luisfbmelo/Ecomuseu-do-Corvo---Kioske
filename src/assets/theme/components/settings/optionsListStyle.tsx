import styled from 'styled-components';

//  ============================================
//  Helpers
//  ============================================
import {hexToRgbA} from 'assets/theme/helpers/functions'; 

//  ============================================
//  Components
//  ============================================
import Select from 'react-select';

export default styled.ul`
  width: 30vmax;
  padding: 0 0 20px;
  margin:0 50px;
  list-style:none;
  border-top:1px solid white;

  li{
    padding: 20px 0;
  }

  button{
    background: none;
    border:none;
    color:white;
    width: 100%;
    margin:0;
    padding: 20px 0;    

    font-size: 2vmin;
    display: flex;
    align-items: center;

    font-family: ${props => props.theme.types.body};

    &:hover{
      cursor:pointer;
    }

    span{
      width: 75%;
      text-align: left;
    }

    i{
      width: 25%;
      text-align: right;
      font-size: 3vmin;
    }
  }
`

export const FormGroup = styled.div`
  display: flex;
  align-items: center;
  font-size: 2vmin;

  label{
    color:white;
    width: 75%;
  }

  input,
  select{
    width: 25%;
    text-align: right;
    background:white;
    border:1px solid white;
    padding: 10px;
    color:black;
    font-size: 1.5vmin;
  }
`

export const SelectStyled = styled(Select)`
  

  .react-select{
    &__control{
      border-radius: 0;

      &--is-focused{
        border-color: ${props => props.theme.primary}!important;
        box-shadow: 0 0 0 1px ${props => props.theme.primary};
      }
    }

    &__value-container{
      width:150px;
      font-family: ${props => props.theme.types.body};
    }

    &__value-container,
    &__menu{
      font-size: 1.5vmin;      
    }

    &__menu{
      margin:0;      
      border-radius: 0;
      padding:0;

      div > *{
        padding: 15px 5px;
      }
    }

    &__option{
      transition: all 0.3s ease;

      &--is-selected{
        background-color: ${props => props.theme.primary};
        color: ${props => props.theme.brown};
        font-weight: 700;
      }

      &--is-focused:not(.react-select__option--is-selected),
      &:not(.react-select__option--is-selected):hover{
        background-color: ${props => hexToRgbA(props.theme.primary, 0.2)};
        color: ${props => props.theme.brown};
      }
    }
  }
`