import styled from 'styled-components';

//  Animations
import { fadeIn, fadeOut } from 'assets/theme/helpers/animations';

const ArchiveStyle = styled.div`
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