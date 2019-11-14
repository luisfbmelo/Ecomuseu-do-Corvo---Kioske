import React from 'react';

//  ====================================================
//  Styles
//  ====================================================
import ArchiveStyled from 'assets/theme/screens/archiveStyle';

//  ====================================================
//  Components
//  ====================================================
import Menu from 'components/menus/mainMenu';

const ArchiveScreen: React.FC = () => {
  return (
    <ArchiveStyled>
      <Menu />
    </ArchiveStyled>
  );
}

export default ArchiveScreen;
