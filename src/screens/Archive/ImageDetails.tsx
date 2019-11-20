import React, { PureComponent } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

//  ====================================================
//  Styles
//  ====================================================
import ArchiveStyled from 'assets/theme/screens/archiveStyle';
import { MainContainerStyle } from 'assets/theme/global/containers';

//  ====================================================
//  Components
//  ====================================================
import Menu from 'components/menus/mainMenu';
import ImageDetailsContainer from 'containers/archive/images/details';
import ImagePreview from 'containers/archive/images/details/preview';
import ImageRelated from 'containers/archive/images/details/related';

class ImageDetailsScreen extends PureComponent<RouteComponentProps, {}>{
  
  render(){
    return (
      <ArchiveStyled className="page-wrapper">
        <Menu />
        <ImageDetailsContainer />
        <MainContainerStyle width="65vw">
          <ImagePreview />
          <ImageRelated />
        </MainContainerStyle>      
      </ArchiveStyled>
    );
  }
}

export default withRouter(ImageDetailsScreen);
