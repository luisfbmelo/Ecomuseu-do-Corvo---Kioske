import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

//  Actions
import {
  setSetting,
  setSettings,
  updateSettings,
  receiveUpdateSettings,
  resetSettings
} from 'actions/settings';

//  Component
import SettingsComp from 'components/settings';

function mapStateToProps(state: any) {
  return {
    settings: state.settings
  };
}

function mapDispatchToProps(dispatch: any) { 
  return bindActionCreators({ 
    setSetting,
    setSettings,
    updateSettings,
    receiveUpdateSettings,
    resetSettings
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SettingsComp));