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

const HomeScreen: React.FC = () => {
  return (
    <HomeStyled>
      <header>
        <Logo />
        <h1>
          Bem-vindo ao Ecomuseu do Corvo
        </h1>
      </header>
      <Menu />
    </HomeStyled>
  );
}

export default HomeScreen;
