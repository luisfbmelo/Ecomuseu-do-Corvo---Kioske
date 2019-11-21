import React, { Component } from "react";
import { Link } from 'react-router-dom';

//  ============================================
//  Styles
//  ============================================
import { GenericGalleryStyled } from 'assets/theme/components/galleries/galleryStyle';

//  ============================================
//  Components
//  ============================================
import { GenericSlider } from "assets/theme/components/galleries/slickStyle";

//  ============================================
//  Interface
//  ============================================
interface GalleryProps{
  images: Array<{ image: any }>;
  baseUrl: string;
}

interface GalleryState {
}


export default class GenericGallery extends Component<GalleryProps, GalleryState> {
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
  
  constructor(props: GalleryProps) {
    super(props);

    this.settings = {
      className: "center",
      focusOnSelect: false,
      infinite: false,
      slidesToShow:5,
      slidesToScroll: 1,
      variableWidth: false,
      swipeToSlide: true,
      draggable: true
    };

    this.slider = React.createRef();
  }
  
  renderList = () => {
    return this.props.images && this.props.images.map((el: any) => (
      <Link to={{
        pathname: `${this.props.baseUrl}${el.id}`
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

  render() {
    
    return (
      <GenericGalleryStyled>
        <GenericSlider {...this.settings} ref={c => (this.slider = c)}>
          {this.renderList()}
        </GenericSlider>
      </GenericGalleryStyled>
    );
  }
}