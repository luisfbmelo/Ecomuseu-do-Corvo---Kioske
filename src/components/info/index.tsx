import React from 'react';
import ReactDOM from 'react-dom';

//  ============================================
//  Styles
//  ============================================
import InfoStyled from 'assets/theme/components/info/infoModalStyle';

//  ============================================
//  Types
//  ============================================
import { INITIAL_TYPE } from 'reducers/info';

//  ============================================
//  Interface
//  ============================================
interface IProps{
  fetchInfo: (filter?: any) => void;
  resetInfo: () => void;
  setViewed: (type: string) => void;
  resetViewed: () => void;
  info: INITIAL_TYPE;
  pageType: string
}

interface IState{
  isOpen: boolean;
  content: {
    titulo: string,
    descricao: string
  };
  closeModal: () => void;
}

export default ({isOpen, content, closeModal}: IState) => {
  if(!isOpen || !content){
    return null
  }

  return (
    ReactDOM.createPortal(
      <InfoStyled>
        <h1>{content.titulo}</h1>
        <p dangerouslySetInnerHTML={{__html: content.descricao.replace(/\n/g,"<br />")}}></p>
        <button type="button" onClick={closeModal}><span>Continuar</span><i className="fas fa-arrow-right"></i></button>
      </InfoStyled>,
      document.body
    )
  )
}