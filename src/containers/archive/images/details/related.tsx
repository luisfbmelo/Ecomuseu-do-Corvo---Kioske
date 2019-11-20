import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";

//  Actions
import {
  fetchRelatedImages,
  resetRelatedImages
} from 'actions/images';

//  Component
import ImageRelatedContainer from 'components/archive/images/details/related';

function mapStateToProps(state: any) {
  return {
    relatedimages: state.relatedimages
  };
}

function mapDispatchToProps(dispatch: any) { 
  return bindActionCreators({ 
    fetchRelatedImages,
    resetRelatedImages
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ImageRelatedContainer));