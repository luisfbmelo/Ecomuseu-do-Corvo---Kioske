import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//  Actions
import {
  startLoading,
  stopLoading
} from 'actions/loading';

//  Component
import Webview from 'components/webview/webview';

function mapStateToProps(state: any) {
  return {
  };
}

function mapDispatchToProps(dispatch: any) { 
  return bindActionCreators({ 
    startLoading,
    stopLoading
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Webview);