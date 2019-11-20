import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";

//  Actions
import {
  fetchCats,
  resetCats
} from 'actions/cats';

//  Component
import SwiperGallery from 'components/galleries/swiperGallery';

function mapStateToProps(state: any) {
  return {
    categories: state.categories
  };
}

function mapDispatchToProps(dispatch: any) { 
  return bindActionCreators({ 
    fetchCats,
    resetCats
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SwiperGallery));