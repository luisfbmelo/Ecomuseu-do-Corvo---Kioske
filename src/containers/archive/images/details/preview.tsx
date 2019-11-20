import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";

//  Actions
import {
  fetchImageDetails,
  resetImage
} from 'actions/images';

//  Component
import ImageDetailsPreview from 'components/archive/images/details/preview';

function mapStateToProps(state: any) {
  return {
    image: state.image
  };
}

function mapDispatchToProps(dispatch: any) { 
  return bindActionCreators({ 
    fetchImageDetails,
    resetImage
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ImageDetailsPreview));