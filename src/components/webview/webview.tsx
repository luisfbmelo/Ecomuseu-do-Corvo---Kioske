import React, { Component, WebViewHTMLAttributes } from 'react';


//  ============================================
//  Styles
//  ============================================
import WebviewStyled from 'assets/theme/components/webview/webviewStyle';

//  ============================================
//  Components
//  ============================================
import WebviewMenu from 'components/webview/menu';
const WebView = require('react-electron-web-view');

//  ============================================
//  Interfaces
//  ============================================
interface IProps{
  startLoading: () => void;
  stopLoading: () => void;
}

interface IState{
  canGoBack: boolean
  canGoForward: boolean
}

export default class WebviewContainer extends Component<IProps, IState>{
  webview: any;
  constructor(props: IProps) {
    super(props);

    this.webview = React.createRef();

    this.state = {
      canGoBack: false,
      canGoForward: false
    }
  }

  componentDidMount() {
    
    const webviewObj = document.querySelector('webview');
    if(webviewObj){
      webviewObj.addEventListener('dom-ready', this.viewReady);
      webviewObj.addEventListener('did-start-loading', this.loadstart);
      webviewObj.addEventListener('did-stop-loading', this.loadstop);
    }
  }

  viewReady = () => {
    this.setState({
      canGoBack: this.webview.current.canGoBack(),
      canGoForward: this.webview.current.canGoForward(),
    });

    this.webview.current.insertCSS('#header{display: none!important;}');
    this.webview.current.insertCSS('#content{margin-top:-20vh}')
  }

  loadstart = () => {
    this.props.startLoading();
  }

  loadstop = () => {
    this.props.stopLoading();
  }
  
  goBack = () => {
    if(this.webview.current.canGoBack)
      this.webview.current.goBack();
  }
  
  goForward = () => {
    if(this.webview.current.canGoForward)
      this.webview.current.goForward();
  }

  reload = () => {
    this.webview.current.reload();
  }

  render(){
    
    return (
      <WebviewStyled>
        <WebviewMenu 
          goBack={this.goBack} 
          goForward={this.goForward} 
          reload={this.reload}
          canGoBack={this.state.canGoBack}
          canGoForward={this.state.canGoForward}/>
        <WebView src="https://www.csarmento.uminho.pt/site/s/porgener/page/corvo" ref={this.webview}/>
      </WebviewStyled>
    )
  }
}