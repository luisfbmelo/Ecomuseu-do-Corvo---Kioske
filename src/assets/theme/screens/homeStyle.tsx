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

  .App-logo {
    height: 25vmin;
  }

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    height:70vh;

    h1{
      margin-top: 54px;
      font-size: 6vmin;
    }
    
  }
`

export default HomeStyle;