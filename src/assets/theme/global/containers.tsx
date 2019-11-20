import styled from 'styled-components';

export default (props:any) => `
  .page-wrapper{
    display: flex;

    main{
      position: relative;
      overflow-y: auto;
      height: 100%;
      &::-webkit-scrollbar { 
        display: none; 
      } 
    }
  }
`

export const MainContainerStyle = styled.main`
  width: ${(props: { width?: string; }) => props.width || "90vw" };

`