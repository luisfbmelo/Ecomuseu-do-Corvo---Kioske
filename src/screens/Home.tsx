import React from 'react';
import Logo from 'assets/img/logos/logoSVG';

//  ====================================================
//  Styles
//  ====================================================
import HomeStyled from 'assets/theme/screens/homeStyle';

//  ====================================================
//  Components
//  ====================================================
import Menu from 'components/menus/homeMenu';
import LanguageSelector from 'components/languages/langSelector';

//  ====================================================
//  Utils
//  ====================================================
import { useTranslation } from 'react-i18next';

const HomeScreen: React.FC = () => {
  const { t } = useTranslation();

  return (
    <HomeStyled>
      <header>
        <div className="app-logo">
          <Logo />
        </div>
        <h1>
          {t('Bem-vindo ao Ecomuseu do Corvo')}
        </h1>
        <LanguageSelector />
      </header>
      <Menu />      
    </HomeStyled>
  );
}

export default HomeScreen;
