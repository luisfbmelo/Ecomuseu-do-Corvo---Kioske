import React from 'react';
import { withTheme } from 'styled-components';

//  ============================================
//  Components
//  ============================================
import { PropagateLoader } from 'react-spinners';

//  ============================================
//  Styles
//  ============================================
import LoadingStyled, { loadingOverride } from 'assets/theme/components/common/loadingStyle';

//  ============================================
//  Types
//  ============================================
import { INITIAL_TYPE } from 'reducers/loading';

//  ============================================
//  Interface
//  ============================================
interface IProps{
  loading: INITIAL_TYPE;
  theme: any;
}

interface IState{
}

class LoadingComp extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    if(!this.props.loading.status){
      return null;
    }

    return (
      <LoadingStyled>
        <PropagateLoader
          css={loadingOverride}
          color={this.props.theme.primary}
          loading={true}
          sizeUnit={"px"}
          size={20}
        />
      </LoadingStyled> 
    )
  }
}

export default withTheme(LoadingComp);