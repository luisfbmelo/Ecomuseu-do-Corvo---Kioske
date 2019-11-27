import React, { Component } from 'react';

//  ============================================
//  Styles
//  ============================================
import { SelectStyled } from 'assets/theme/components/settings/optionsListStyle';

//  ============================================
//  Interface
//  ============================================
interface IProps{
  id?: string;
  value: string;
  onChange: (evt: any) => void;
  className?: string;
  classNamePrefix?: string;
}

const options = [
  { value: 30, label: '30 segundos' },
  { value: 1*60, label: '1 minuto' },
  { value: 5*60, label: '5 minutos' },
  { value: 10*60, label: '10 minutos' },
  { value: 30*60, label: '30 minutos' }
]

export default ({id, value, onChange, className, classNamePrefix}: IProps) => {
  return (
    <SelectStyled
      id={id}
      className={className}
      classNamePrefix={classNamePrefix}
      value={options.filter(option => option.value === parseInt(value))}
      onChange={onChange}
      options={options}/>
  )
}