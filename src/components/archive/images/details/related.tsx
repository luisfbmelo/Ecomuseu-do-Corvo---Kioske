import React, { Component } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';

//  ============================================
//  Styles
//  ============================================
import ImageRelatedStyled from 'assets/theme/components/archive/imageRelatedStyle';
import { GenericGalleryStyled } from 'assets/theme/components/galleries/galleryStyle';

//  ============================================
//  Components
//  ============================================
import { GenericSlider } from "assets/theme/components/galleries/slickStyle";

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
  settings: {
    className: string;
    focusOnSelect: boolean;
    infinite: boolean;
    slidesToShow: number;
    slidesToScroll: number;
    variableWidth: boolean;
    swipeToSlide: boolean;
    draggable: boolean;
  };
  slider: any;

  constructor(props: ImageRelatedProps) {
    super(props);

    this.settings = {
      className: "center",
      focusOnSelect: false,
      infinite: true,
      slidesToShow:5,
      slidesToScroll: 1,
      variableWidth: false,
      swipeToSlide: true,
      draggable: true
    };

    this.slider = React.createRef();
    
  }

  componentDidMount() {
    !this.props.relatedimages.fetched && this.props.fetchRelatedImages({
      'id_nin': this.props.match.params.id_image,
      'categorias_in': this.props.match.params.id_cat
    });
  }

  componentWillUnmount() {
    this.props.resetRelatedImages();
  }

  nextSlide = () => {
    this.slider.slickNext();
  }

  prevSlide = () => {
    this.slider.slickPrev();
  }

  renderList = () => {
    const { id_cat } = this.props.match.params;

    return this.props.relatedimages.data && this.props.relatedimages.data.map((el: any) => (
      <Link to={{
        pathname: `/archive/${id_cat}/image/${el.id}`
      }}
      key={el.id}>          
        <div 
          className="img-container" 
          style={{
            backgroundImage: `url("${process.env.REACT_APP_API_URL+el.imagem.url}")`
          }}>
        </div>
      </Link>
    ))
  }

  render(){
    
    if(!this.props.relatedimages.data || this.props.relatedimages.data.length===0){
      return null;
    }

    return (
      <ImageRelatedStyled>
        <div className="text-center">
          <i className="fas fa-chevron-left" onClick={this.prevSlide}></i>
          <span>Deslize para visualizar mais deste tema</span>
          <i className="fas fa-chevron-right" onClick={this.nextSlide}></i>
        </div>
        <GenericGalleryStyled>
          <GenericSlider {...this.settings} ref={c => (this.slider = c)}>
            {this.renderList()}
          </GenericSlider>
        </GenericGalleryStyled>
      </ImageRelatedStyled>
    )
  }
}