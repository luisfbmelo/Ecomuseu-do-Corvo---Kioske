import React from 'react';

//  ============================================
//  Images
//  ============================================
import HomeIcon from 'assets/img/icons/homeSVG';
import infoIcon from 'assets/img/icons/info.svg';
import helpIcon from 'assets/img/icons/help.svg';

//  ============================================
//  Styles
//  ============================================
import { MainNav } from 'assets/theme/components/menus/mainMenuStyle';

//  ============================================
//  Components
//  ============================================
import {Link} from 'react-router-dom';

export default (props: any) => {
  console.log(props);
  return(
  <MainNav>
    <ul>
      <li>
        <Link to="/">
          <HomeIcon />
          <span>Início</span>
        </Link>
      </li>
    </ul>
  </MainNav>
)}