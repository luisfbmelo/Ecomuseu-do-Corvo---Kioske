import React from 'react';
import { withRouter } from 'react-router-dom';

//  ====================================================
//  Styles
//  ====================================================
import ArchiveStyled from 'assets/theme/screens/archiveStyle';
import { MainContainerStyle } from 'assets/theme/global/containers';

//  ====================================================
//  Components
//  ====================================================
import Menu from 'components/menus/mainMenu';
import VideosList from 'containers/videos/list';

const VideosArchiveScreen: React.FC = (props: any) => {
  return (
    <ArchiveStyled className="page-wrapper">
      <Menu />
      <MainContainerStyle>
        <VideosList />
      </MainContainerStyle>
    </ArchiveStyled>
  );
}

export default withRouter(VideosArchiveScreen);
