import React from 'react';

//  ============================================
//  Styles
//  ============================================
import OptionsListStyled, { FormGroup } from 'assets/theme/components/settings/optionsListStyle';

//  ============================================
//  Components
//  ============================================
import Select from 'components/fields/select';

//  ====================================================
//  Utils
//  ====================================================
import { useTranslation } from 'react-i18next';
import { getTranslatedOptions } from 'consts/settings';

//  ============================================
//  Interface
//  ============================================
interface IProps{
  resetAppHandler: (event: any) => void;
  onResetTimeChange: (event: any) => void;
  setLanguage: (event: any) => void;
  resetTime: string;
}

export default ({resetAppHandler, onResetTimeChange, resetTime, setLanguage}: IProps) => {
  const { t, i18n } = useTranslation();

  const resetTimeSelectOptions = getTranslatedOptions(t, 'reset');
  const languages = getTranslatedOptions(t, 'languages');

  if(!resetTimeSelectOptions || !languages){
    return null;
  }

  return (
    <OptionsListStyled>
      <li>
        <button type="button" onClick={resetAppHandler}>
          <span>{t('Reiniciar aplicação')}</span>
          <i className="fas fa-chevron-right"/>
        </button>
      </li>

      <li>
        <FormGroup>
          <label htmlFor="reset-time">{t('Reiniciar a aplicação após...')}</label>
          <Select
            className="react-select-container"
            classNamePrefix="react-select"
            id="reset-time"
            value={resetTime}
            onChange={onResetTimeChange}
            options={resetTimeSelectOptions}/>
        </FormGroup>
      </li>

      <li>
        <FormGroup>
          <label htmlFor="reset-time">{t('Idioma')}</label>
          <Select
            className="react-select-container"
            classNamePrefix="react-select"
            id="languages-list"
            value={i18n.language}
            onChange={setLanguage}
            options={languages}/>
        </FormGroup>
      </li>
    </OptionsListStyled>
  )
}