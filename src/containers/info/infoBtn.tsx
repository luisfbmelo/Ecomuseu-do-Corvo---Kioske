import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

//  Actions
import {
  fetchInfo,
  resetInfo,
  setViewed,
  resetViewed
} from 'actions/info';

//  Component
import InfoBtn from 'components/menus/buttons/info';

function mapStateToProps(state: any) {
  return {
    info: state.info
  };
}

function mapDispatchToProps(dispatch: any) { 
  return bindActionCreators({ 
    fetchInfo,
    resetInfo,
    setViewed,
    resetViewed
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(InfoBtn));