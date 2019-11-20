import React, { Component, useRef, RefObject } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';

//  ============================================
//  Styles
//  ============================================
/* import ImagePreviewStyled from 'assets/theme/components/archive/ImagePreviewStyle'; */

//  ============================================
//  Components
//  ============================================

//  ============================================
//  Types
//  ============================================
import { INITIAL_TYPE as IMAGE_INIT_TYPE } from 'reducers/images';

//  ============================================
//  Interface
//  ============================================
//  React Router params
interface TParams {
  id_image: string
};

interface ImagePreviewProps extends RouteComponentProps<TParams>{
  fetchImageDetails: (id: string) => void;
  resetImage: () => void;
  image: IMAGE_INIT_TYPE;
}

interface ImagePreviewState {
}

export default class ImagePreview extends Component<ImagePreviewProps, ImagePreviewState>{

  constructor(props: ImagePreviewProps) {
    super(props);
  }

  componentDidMount() {
    !this.props.image.fetched && this.props.fetchImageDetails(this.props.match.params.id_image);
  }

  componentWillUnmount() {
    this.props.resetImage();
  }

  render(){
    return (
      <section>
        IMAGE PREVIEW
      </section>
    )
  }
}