import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";

//  Actions
import {
  fetchImageDetails,
  resetImage
} from 'actions/images';

import {
  fetchCategory,
  resetCategory
} from 'actions/cats';

//  Component
import ImageDetailsContainer from 'components/archive/images/details';

function mapStateToProps(state: any) {
  return {
    image: state.image,
    category: state.category
  };
}

function mapDispatchToProps(dispatch: any) { 
  return bindActionCreators({ 
    fetchImageDetails,
    resetImage,
    fetchCategory,
    resetCategory
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ImageDetailsContainer));