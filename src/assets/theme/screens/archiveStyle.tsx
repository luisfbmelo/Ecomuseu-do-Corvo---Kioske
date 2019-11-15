import styled from 'styled-components';

//  Images
import bgImage from 'assets/img/backgrounds/Background_second.png';

//  Animations
import { fadeIn, fadeOut } from 'assets/theme/helpers/animations';

const ArchiveStyle = styled.div`
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
`

export default ArchiveStyle;