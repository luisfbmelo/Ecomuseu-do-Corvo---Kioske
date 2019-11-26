import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

//  ============================================
//  Utils
//  ============================================
import { getPageType } from 'utils/history';

//  ============================================
//  Components
//  ============================================
import InfoComp from 'components/info'

//  ============================================
//  Styles
//  ============================================
import InfoBtnStyled from 'assets/theme/components/info/infoBtnStyle';

//  ============================================
//  Types
//  ============================================
import { INITIAL_TYPE } from 'reducers/info';
import { RouteComponentProps } from 'react-router-dom';

//  ============================================
//  Interface
//  ============================================
interface IProps extends RouteComponentProps{
  fetchInfo: (filter?: any) => void;
  resetInfo: () => void;
  setViewed: (type: string) => void;
  resetViewed: () => void;
  info: INITIAL_TYPE;
}

interface IState{
  isOpen: boolean;
}

export default class InfoContainer extends Component<IProps, IState>{
  initialState: { isOpen: boolean; };

  constructor(props: IProps) {
    super(props);
    
    this.initialState = {
      isOpen: false
    }

    this.state = this.initialState;
  }
  

  componentDidMount() {

    const pageType = getPageType(this.props.location.pathname);

    //  If is not viewed already
    //  Set as viewed, and fetch data
    if(pageType){

      if(!this.props.info.viewed[pageType]){
        this.setState({
          isOpen: true
        });

        //  Set viewed
        this.props.setViewed(pageType);
      }

    }

    !this.props.info.data && this.props.fetchInfo();
  }

  getCurData = () => {

    const pageType = getPageType(this.props.location.pathname);

    return this.props.info.data.find((el: any) => {

      const hasCat = el.categoriainfos.filter((cat: any) => {
        return cat.slug_categoria===pageType;
      });

      return hasCat.length>0;
    });
  }

  closeModal = () => {
    this.setState({
      isOpen: false
    });
  }

  openModal = () => {
    this.setState({
      isOpen: true
    })
  }

  render() {
    if(!this.props.info.data || this.props.info.data.length===0){
      return null;
    }

    return (
      <Fragment>
        <InfoBtnStyled onClick={this.openModal} className={this.state.isOpen ? 'active' : ''}>
          {this.props.children}
        </InfoBtnStyled>
        {
          this.props.info.data && this.props.info.data.length>0 && 
          <InfoComp
            isOpen={this.state.isOpen}
            closeModal={this.closeModal}
            content={this.getCurData()}/>
        }
        
      </Fragment>
    )
  }
}