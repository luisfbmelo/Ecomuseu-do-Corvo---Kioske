import styled from 'styled-components';

import { Link } from 'react-router-dom';

//  ============================================
//  Helpers
//  ============================================

export default styled.section`
  padding: 50px;

  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
`

export const ArticleStyled = styled.article`
  width: ${100/3}%;
  height: 30vh;
  margin-bottom: 30px;

  div{
    padding:15px;
    height:100%;
    
  }
`

export const LinkStyled = styled(Link)`  
  display: block;
  width:100%;
  height:100%;
  background-image: url("${(props: { bgimage?: string }) => props.bgimage || ''}");
  background-repeat: no-repeat;
  background-size: cover;
  transition: all 0.3s ease;

  &:hover{
    box-shadow: 0px 1px 8px 5px #00000060;
  }

`