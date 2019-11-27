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
import Menu from 'containers/menus/mainMenu';
import SettingsList from 'containers/settings';

const WebpageScreen: React.FC = (props: any) => {
  return (
    <ArchiveStyled className="page-wrapper">
      <Menu />
      <MainContainerStyle>
        <SettingsList />
      </MainContainerStyle>
    </ArchiveStyled>
  );
}

export default withRouter(WebpageScreen);
