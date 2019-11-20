import React, { PureComponent } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

//  ============================================
//  Styles
//  ============================================
import LinkStyled from 'assets/theme/components/common/backButtonStyle';

//  ============================================
//  Interfaces
//  ============================================
interface IProps extends RouteComponentProps{
  prevLink: string
}

class Backbutton extends PureComponent<IProps, {}>{
  render() {
    return (
      <LinkStyled to={this.props.prevLink}>
        <span className="icon">
          <i className="fas fa-chevron-left"></i>
        </span>
        <span>
          {this.props.children}
        </span>
        
      </LinkStyled>
    )
  }
}

export default withRouter(Backbutton);