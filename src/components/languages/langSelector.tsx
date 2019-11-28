import React, { Component } from 'react';

//  ============================================
//  Themes
//  ============================================
import LangStyled from 'assets/theme/components/languages/selectorStyle';

//  ============================================
//  Utils
//  ============================================
import { withTranslation, WithTranslation } from 'react-i18next';
import { getTranslatedOptions } from 'consts/settings';

//  ============================================
//  Interface
//  ============================================
//  React Router params
interface TParams {
  id_cat: string
};

interface LanguageSelectorProps extends WithTranslation{
}

interface LanguageSelectorState {
}

class LanguageSelector extends Component<LanguageSelectorProps, LanguageSelectorState>{
  constructor(props: LanguageSelectorProps) {
    super(props);
  }
  
  selectLanguage( language: string, evt: any){
    this.props.i18n.changeLanguage(language);
  }

  render() {
    const { t, i18n } = this.props;
    
    const languages = getTranslatedOptions(t, 'languages');

    if(!languages){
      return null;
    }

    return (
      <LangStyled>
        <ul>
          {
            languages.map(({value, label}) => (
              <li key={value} className={i18n.language===value ? 'active' : ''}>
                <button type="button" onClick={this.selectLanguage.bind(this, value)}>
                  <span className="lang-key">{value}</span>
                  <span className="lang-name">{label}</span>
                </button>
              </li>
            ))
          }
        </ul>
      </LangStyled>
    )
  }
}


export default withTranslation()(LanguageSelector);