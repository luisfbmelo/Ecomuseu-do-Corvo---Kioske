import React from 'react';

//  ============================================
//  Images
//  ============================================
import HomeIcon from 'assets/img/icons/homeSVG';
import InfoIcon from 'assets/img/icons/infoSVG';
/*import helpIcon from 'assets/img/icons/help.svg'; */

//  ============================================
//  Styles
//  ============================================
import { MainNav } from 'assets/theme/components/menus/mainMenuStyle';

//  ============================================
//  Components
//  ============================================
import {Link} from 'react-router-dom';
import InfoBtn from 'containers/info/infoBtn';

export default (props: any) => {
  return(
  <MainNav className="main-nav">
    <ul>
      <li>
        <Link to="/">
          <HomeIcon />
          <span>Início</span>
        </Link>
      </li>
      <li>
        <InfoBtn>
          <InfoIcon />
          <span>Sobre</span>
        </InfoBtn>
      </li>
    </ul>
  </MainNav>
)}