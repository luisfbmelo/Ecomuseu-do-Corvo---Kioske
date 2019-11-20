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
import SwipperGallery from 'containers/galleries/list';

const ArchiveScreen: React.FC = (props: any) => {
  console.log(props);
  return (
    <ArchiveStyled className="page-wrapper">
      <Menu />
      <MainContainerStyle>
        <SwipperGallery />
      </MainContainerStyle>      
    </ArchiveStyled>
  );
}

export default withRouter(ArchiveScreen);
