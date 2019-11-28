import styled from 'styled-components';

//  Images
import bgImage from 'assets/img/backgrounds/Main_background.png';

//  Animations
import { fadeIn, fadeOut } from 'assets/theme/helpers/animations';

const HomeStyle = styled.div`
  background: url("${bgImage}") no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;

  &.page-enter {
    animation: ${fadeIn} 0.3s forwards;
  }
  &.page-exit {
    position: absolute;
    top: 0;
    animation: ${fadeOut} 0.3s forwards;
  }

  position: relative;
  text-align: center;

  .app-logo {
    height: 25vmin;

    svg{
      height:100%;
      width: auto!important;
    }
  }

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    height:70vh;

    h1{
      margin: 60px 0;
      font-size: 6vmin;
    }
    
  }
`

export default HomeStyle;