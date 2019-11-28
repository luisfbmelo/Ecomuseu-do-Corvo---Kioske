import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withTranslation } from 'react-i18next';

//  Actions
import {
  fetchVideos,
  resetVideos
} from 'actions/videos';

//  Component
import VideosList from 'components/videos/list';

function mapStateToProps(state: any) {
  return {
    videos: state.videos
  };
}

function mapDispatchToProps(dispatch: any) { 
  return bindActionCreators({ 
    fetchVideos,
    resetVideos
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(VideosList));