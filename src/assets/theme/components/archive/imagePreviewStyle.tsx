import styled from 'styled-components';

//  ============================================
//  Interface
//  ============================================
interface StyleProps {
  Size: string;
}

export default styled.section`

  height: ${(props: StyleProps) => 
    props.Size === 'full' ? '100%' :
    props.Size === 'partial' ? 'calc(100% - 212px)' : 
    'calc(100% - 212px)'
  };

  display: flex;
  align-items: center;
  padding: 50px;

  button{
    display: block;
    height: 100%;
    background: none;
    border: none;
    padding: 0;
    margin: 0 auto;
    outline: none;

    &:hover{
      cursor: pointer;

      .btn-expand{
        color: ${props => props.theme.primary};
        background-color: ${props => props.theme.brown};
      }
    }

    img{
      display: block;
      width: auto;
      max-width: 100%;
      height: 100%;
      max-height: 100%;
      margin: 0 auto;      
      transition: all 0.3s ease;
      &:hover{
        box-shadow: 0px 1px 8px 5px #00000060;
      }
    }

    .image-wrapper{
      position: relative;
      display: block;
      width: auto;
      max-width: 100%;
      height: 100%;
      max-height: 100%;
      margin: 0 auto;      
      transition: all 0.3s ease;
    }

    .btn-expand{
      display: inline-block;
      position:absolute;
      left:50%;
      bottom: 50px;
      transform: translateX(-50%);

      background-color: ${props => props.theme.primary};
      border-radius: 30px;
      color: ${props => props.theme.brown};
      font-size: 1.8vmin;
      padding: 20px 30px;

      box-shadow: 0px 1px 8px 5px #00000060;
      transition: all 0.3s ease;

      span, i{
        vertical-align: middle;
      }

      i{
        margin-right: 15px;
        font-size: 2.5vmin;
      }
    }
  }
`