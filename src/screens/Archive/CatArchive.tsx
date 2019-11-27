import React, { PureComponent } from 'react';
import { RouteComponentProps } from 'react-router-dom';

//  ====================================================
//  Styles
//  ====================================================
import ArchiveStyled from 'assets/theme/screens/archiveStyle';
import { MainContainerStyle } from 'assets/theme/global/containers';

//  ====================================================
//  Components
//  ====================================================
import Menu from 'containers/menus/mainMenu';
import CatsList from 'containers/archive/cats/list';
import ImagesList from 'containers/archive/images/list';

class CategoriesArchiveScreen extends PureComponent<RouteComponentProps, {}>{
  
  render(){
    return (
      <ArchiveStyled className="page-wrapper">
        <Menu />
        <CatsList />
        <MainContainerStyle width="70vw">
          <ImagesList />
        </MainContainerStyle>      
      </ArchiveStyled>
    );
  }
}

export default CategoriesArchiveScreen;