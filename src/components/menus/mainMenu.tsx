import React from 'react';

//  ============================================
//  Images
//  ============================================
import HomeIcon from 'assets/img/icons/homeSVG';
import InfoIcon from 'assets/img/icons/infoSVG';
import SettingsIcon from 'assets/img/icons/settingsSVG';
/*import helpIcon from 'assets/img/icons/help.svg'; */

//  ============================================
//  Styles
//  ============================================
import { MainNav, BottomNav } from 'assets/theme/components/menus/mainMenuStyle';

//  ============================================
//  Components
//  ============================================
import {Link} from 'react-router-dom';
import InfoBtn from 'containers/info/infoBtn';

//  ============================================
//  Utils
//  ============================================
import { getPageType } from 'utils/history';
import { useTranslation } from 'react-i18next';

//  ============================================
//  Helper functions
//  ============================================
//  Check if is active
const isActive = (curPath: string, toCompare: string) => {
  return curPath.indexOf(toCompare)>=0;
}

export default (props: any) => {
  const { pathname, state } = props.location;
  const { t } = useTranslation();

  return(
  <MainNav className="main-nav">
    <ul>
      <li>
        <Link to="/">
          <HomeIcon />
          <span>{t('Início')}</span>
        </Link>
      </li>
      {getPageType(pathname) && <li>
        <InfoBtn>
          <InfoIcon />
          <span>{t('Sobre')}</span>
        </InfoBtn>
      </li>}
    </ul>
    <BottomNav>
      <ul>
        <li className={isActive(pathname, '/settings') ? 'active' : ''}>
          <Link to={{pathname: state && state.prevPath ? state.prevPath : '/settings', state: { prevPath: pathname }}}>
            <SettingsIcon />
          </Link>
        </li>
      </ul>
    </BottomNav>
  </MainNav>
)}