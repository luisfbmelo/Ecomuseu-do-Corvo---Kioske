import React, { Component, ReactComponentElement } from "react";

//  Styles
import GalleryStyled from 'assets/theme/components/galleries/galleryStyle'

//  Components
import Slider from "assets/theme/components/galleries/slickStyle";

//  Images
import bgImage from 'assets/img/backgrounds/Main_background.png';

export default class SwipeToSlide extends Component {
  settings: {
    className: string;
    focusOnSelect: boolean;
    centerMode: boolean;
    infinite: boolean;
    slidesToShow: number;
    slidesToScroll: number;
    variableWidth: boolean;
    swipeToSlide: boolean;
  };
  
  constructor(props: any) {
    super(props);

    this.settings = {
      className: "center",
      focusOnSelect: true,
      centerMode: true,
      infinite: true,
      slidesToShow:5,
      slidesToScroll: 1,
      variableWidth: false,
      swipeToSlide: true
    };
  }

  handleClick = (evt: React.MouseEvent<HTMLElement>) => {
    if(evt.currentTarget.closest(".slick-center") == null){
      evt.preventDefault();
    }
  }
  
  render() {
    
    return (
      <GalleryStyled>
        <h1>Arquivo Fotográfico</h1>
        <h2>Escolha um tema para iniciar a sua exploração do nosso arquivo</h2>
        <Slider {...this.settings}>
          <a href="#" onClick={this.handleClick}>
            <div 
              className="img-container" 
              style={{
                backgroundImage: `url("${bgImage}")`
              }}>

              </div>
            <h3>Agricultura e pecuária</h3>
          </a>
          <a href="#" onClick={this.handleClick}>
            <div 
              className="img-container" 
              style={{
                backgroundImage: `url("${bgImage}")`
              }}></div>
            <h3>Ciclo da lã</h3>
          </a>
          <a href="#" onClick={this.handleClick}>
            <div 
              className="img-container" 
              style={{
                backgroundImage: `url("${bgImage}")`
              }}></div>
            <h3>Eletricidade e água</h3>
          </a>
          <a href="#" onClick={this.handleClick}>
            <div 
              className="img-container" 
              style={{
                backgroundImage: `url("${bgImage}")`
              }}></div>
            <h3>Emigração</h3>
          </a>
          <a href="#" onClick={this.handleClick}>
            <div 
              className="img-container" 
              style={{
                backgroundImage: `url("${bgImage}")`
              }}></div>
            <h3>Matança do porco</h3>
          </a>
          <a href="#" onClick={this.handleClick}>
            <div 
              className="img-container" 
              style={{
                backgroundImage: `url("${bgImage}")`
              }}></div>
            <h3>Mobilidades</h3>
          </a>
          <a href="#" onClick={this.handleClick}>
            <div 
              className="img-container" 
              style={{
                backgroundImage: `url("${bgImage}")`
              }}></div>
            <h3>Paisagens e lugares</h3>
          </a>
          <a href="#" onClick={this.handleClick}>
            <div 
              className="img-container" 
              style={{
                backgroundImage: `url("${bgImage}")`
              }}></div>
            <h3>Pesca e apanha do sargaço</h3>
          </a>
          <a href="#" onClick={this.handleClick}>
            <div 
              className="img-container" 
              style={{
                backgroundImage: `url("${bgImage}")`
              }}></div>
            <h3>Religião e festividades</h3>
          </a>
        </Slider>
      </GalleryStyled>
    );
  }
}