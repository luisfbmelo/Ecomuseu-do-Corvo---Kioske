import React from 'react';

//  ============================================
//  Styles
//  ============================================
import OptionsListStyled, { FormGroup } from 'assets/theme/components/settings/optionsListStyle';

//  ============================================
//  Components
//  ============================================
import Select from 'components/fields/select';

//  ============================================
//  Interface
//  ============================================
interface IProps{
  resetAppHandler: (event: any) => void;
  onResetTimeChange: (event: any) => void;
  resetTime: string;
}

export default ({resetAppHandler, onResetTimeChange, resetTime}: IProps) => {
  return (
    <OptionsListStyled>
      <li>
        <button type="button" onClick={resetAppHandler}>
          <span>Reiniciar aplicação</span>
          <i className="fas fa-chevron-right"/>
        </button>
      </li>

      <li>
        <FormGroup>
          <label htmlFor="reset-time">Reiniciar a aplicação após...</label>
          <Select
            className="react-select-container"
            classNamePrefix="react-select"
            id="reset-time"
            value={resetTime}
            onChange={onResetTimeChange}/>
        </FormGroup>
      </li>
    </OptionsListStyled>
  )
}