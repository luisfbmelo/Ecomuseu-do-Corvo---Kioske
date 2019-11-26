import styled from 'styled-components';

export default styled.div`
  min-width: 30%;
  position: fixed;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.brown};
  border-radius: 10px;
  padding:20px;
  z-index: 99;
  text-align: center;
  box-shadow: 0px 1px 8px 0px #00000059;
  font-weight: 600;
  font-family: ${props => props.theme.types.title};
  
  p{
    margin-top:0;
  }

  button{
    margin:10px 10px 0;

    background: none;
    padding: 10px 15px;
    border:1px solid ${props => props.theme.brown};
    transition: all 0.3s ease;
    border-radius: 10px;
    color: ${props => props.theme.brown};    
    font-family: ${props => props.theme.types.title};
    font-weight: 600;

    &:hover{
      background: ${props => props.theme.brown};
      color: ${props => props.theme.primary};
      cursor: pointer;
    }
  }
`