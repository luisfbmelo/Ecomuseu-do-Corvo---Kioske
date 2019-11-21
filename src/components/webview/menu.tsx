import React from 'react';

//  ============================================
//  Styles
//  ============================================
import MenuStyled from 'assets/theme/components/webview/menu';

//  ============================================
//  Interface
//  ============================================
interface IProps{
  goBack: () => void;
  goForward: () => void;
  reload: () => void;
  canGoBack: boolean;
  canGoForward: boolean;
}

export default (props: IProps) => {

  return (
    <MenuStyled className="webview-menu">
      <ul>
        <li>
          <button 
            onClick={props.goBack} 
            className={props.canGoBack===false ? 'disabled' : ''}>
              <i className="fas fa-chevron-left"></i>
          </button>
        </li>
        <li>
          <button 
            onClick={props.goForward} 
            className={props.canGoForward===false ? 'disabled' : ''}>
              <i className="fas fa-chevron-right"></i>
          </button>
        </li>
        <li>
          <button 
            onClick={props.reload}>
              <i className="fas fa-redo"></i>
          </button>
        </li>
      </ul>
    </MenuStyled>
  )
}