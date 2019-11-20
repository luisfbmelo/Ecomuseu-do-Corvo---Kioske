import React, { Component, useRef, RefObject } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';

//  ============================================
//  Styles
//  ============================================
import ImageRelatedStyled from 'assets/theme/components/archive/imageRelatedStyle';

//  ============================================
//  Components
//  ============================================
import Gallery from 'components/galleries/genericGallery';

//  ============================================
//  Types
//  ============================================
import { INITIAL_TYPE as IMAGE_INIT_TYPE } from 'reducers/images';

//  ============================================
//  Interface
//  ============================================
//  React Router params
interface TParams {
  id_cat: string,
  id_image: string
};

interface ImageRelatedProps extends RouteComponentProps<TParams>{
  fetchRelatedImages: (filters?: any) => void;
  resetRelatedImages: () => void;
  relatedimages: IMAGE_INIT_TYPE;
}

interface ImageRelatedState {
}

export default class ImageRelated extends Component<ImageRelatedProps, ImageRelatedState>{

  constructor(props: ImageRelatedProps) {
    super(props);
    
  }

  componentDidMount() {
    console.log(this.props.relatedimages);
    !this.props.relatedimages.fetched && this.props.fetchRelatedImages({
      'id_nin': this.props.match.params.id_image,
      'categorias_in': this.props.match.params.id_cat
    });
  }

  componentWillUnmount() {
    this.props.resetRelatedImages();
  }

  render(){
    const { id_cat } = this.props.match.params;
    return (
      <ImageRelatedStyled>
        <div className="text-center">
          <i className="fas fa-chevron-left"></i>
          <span>Deslize para visualizar mais deste tema</span>
          <i className="fas fa-chevron-right"></i>
        </div>
        <Gallery
          images={this.props.relatedimages.data}
          baseUrl={`/archive/${id_cat}/image/`}
        ></Gallery>
      </ImageRelatedStyled>
    )
  }
}