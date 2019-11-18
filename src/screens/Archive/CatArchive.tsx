import React from 'react';

//  ====================================================
//  Styles
//  ====================================================
import ArchiveStyled from 'assets/theme/screens/archiveStyle';

//  ====================================================
//  Components
//  ====================================================
import Menu from 'components/menus/mainMenu';
import CatsList from 'containers/archive/cats/list';

const CategoriesArchiveScreen: React.FC = () => {
  return (
    <ArchiveStyled className="page-wrapper">
      <Menu />
      <CatsList />
      <main>
        
      </main>      
    </ArchiveStyled>
  );
}

export default CategoriesArchiveScreen;
