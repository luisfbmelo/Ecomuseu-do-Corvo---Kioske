import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//  Actions
import {
  startLoading,
  stopLoading
} from 'actions/loading';

//  Component
import Loading from 'components/common/loading';

function mapStateToProps(state: any) {
  return {
    loading: state.loading
  };
}

function mapDispatchToProps(dispatch: any) { 
  return bindActionCreators({ 
    startLoading,
    stopLoading
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Loading);