import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';

//  ============================================
//  Styles
//  ============================================
import ImagePreviewStyled from 'assets/theme/components/archive/imagePreviewStyle';

//  ============================================
//  Components
//  ============================================
import Lightbox from 'react-image-lightbox';

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
  relatedimages: IMAGE_INIT_TYPE;
}

interface ImagePreviewState {
  isOpen: boolean,
}

export default class ImagePreview extends Component<ImagePreviewProps, ImagePreviewState>{

  constructor(props: ImagePreviewProps) {
    super(props);

    this.state = {
      isOpen: false
    }
  }

  toggleLightbox = () => {
    this.setState({isOpen: !this.state.isOpen});
  }

  render(){
    if(!this.props.image.data){
      return null;
    }

    const { relatedimages } = this.props;

    return (
      <ImagePreviewStyled Size={relatedimages.data && relatedimages.data.length>0 ? 'partial' : 'full'}>
        <button type="button" onClick={this.toggleLightbox}>
          <div className="image-wrapper">
            <img src={process.env.REACT_APP_API_URL+this.props.image.data.imagem.url} alt={"Preview image "+this.props.image.data.id}/>
            <div className="btn-expand">
              <i className="fas fa-expand"></i><span>Ecrã inteiro</span>
            </div>
          </div>
        </button>

        {this.state.isOpen && (
          <Lightbox
            mainSrc={process.env.REACT_APP_API_URL+this.props.image.data.imagem.url}
            onCloseRequest={this.toggleLightbox}
          />
        )}
      </ImagePreviewStyled>
    )
  }
}