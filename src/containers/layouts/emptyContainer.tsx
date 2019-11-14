import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//  Actions
import { resetApp } from 'actions/app';

//  Component
import EmptyLayout from 'layouts/empty';

function mapStateToProps(state: any) {
  return {};
}

function mapDispatchToProps(dispatch: any) { 
  return bindActionCreators({ 
    resetApp
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(EmptyLayout);