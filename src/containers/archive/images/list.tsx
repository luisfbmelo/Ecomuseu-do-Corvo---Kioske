import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";

//  Actions
import {
  fetchImages,
  resetImages
} from 'actions/images';

//  Component
import ImagesList from 'components/archive/images/list';

function mapStateToProps(state: any) {
  return {
    images: state.images
  };
}

function mapDispatchToProps(dispatch: any) { 
  return bindActionCreators({ 
    fetchImages,
    resetImages
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ImagesList));