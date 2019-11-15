import React from 'react';

//  ====================================================
//  Styles
//  ====================================================
import ArchiveStyled from 'assets/theme/screens/archiveStyle';

//  ====================================================
//  Components
//  ====================================================
import Menu from 'components/menus/mainMenu';
import SwipperGallery from 'components/galleries/swiperGallery';

const ArchiveScreen: React.FC = () => {
  return (
    <ArchiveStyled className="page-wrapper">
      <Menu />
      <main>
        <SwipperGallery />
      </main>      
    </ArchiveStyled>
  );
}

export default ArchiveScreen;
