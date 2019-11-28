import React from 'react';
import ReactDOM from 'react-dom';

//  ============================================
//  Styles
//  ============================================
import InfoStyled from 'assets/theme/components/info/infoModalStyle';

//  ============================================
//  Utils
//  ============================================
import { useTranslation } from 'react-i18next';

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
  content: any;
  closeModal: () => void;
}

export default ({isOpen, content, closeModal}: IState) => {
  if(!isOpen || !content){
    return null
  }

  const { t, i18n } = useTranslation();

  const finalContent = {
    title: content[`titulo_${i18n.language}`] ? content[`titulo_${i18n.language}`] : content.titulo ? content.titulo : '',
    description: content[`descricao_${i18n.language}`] ? content[`descricao_${i18n.language}`] : content.descricao ? content.descricao : ''
  }

  return (
    ReactDOM.createPortal(
      <InfoStyled>
        <h1>{finalContent.title}</h1>
        <p dangerouslySetInnerHTML={{__html: finalContent.description.replace(/\n/g,"<br />")}}></p>
        <button type="button" onClick={closeModal}><span>{t('Continuar')}</span><i className="fas fa-arrow-right"></i></button>
      </InfoStyled>,
      document.body
    )
  )
}