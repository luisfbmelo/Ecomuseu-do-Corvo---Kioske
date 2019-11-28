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
  options: Array<{value: string, label: string}>;
}



export default ({id, value, onChange, className, classNamePrefix, options}: IProps) => {
  if(!value){
    return null;
  }
  
  return (
    <SelectStyled
      id={id}
      className={className}
      classNamePrefix={classNamePrefix}
      value={options.filter((option: {value: string, label: string}) => option.value === value.toString())}
      onChange={onChange}
      options={options}/>
  )
}