import React, { Component } from "react";
import { RouteComponentProps, Link } from 'react-router-dom';

//  ============================================
//  Styles
//  ============================================
import GalleryStyled from 'assets/theme/components/galleries/galleryStyle';

//  ============================================
//  Components
//  ============================================
import Slider from "assets/theme/components/galleries/slickStyle";

//  ============================================
//  Images
//  ============================================
import bgImage from 'assets/img/backgrounds/Main_background.png';

//  ============================================
//  Types
//  ============================================
import { INITIAL_TYPE } from 'reducers/cats';

//  ============================================
//  Interface
//  ============================================
//  React Router params
interface TParams {
  id_cat: string
};

interface CatsListProps extends RouteComponentProps<TParams>{
  fetchCats: () => void;
  categories: INITIAL_TYPE
}

interface CatsListState {
}


export default class SwipeToSlide extends Component<CatsListProps, CatsListState> {
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
  
  constructor(props: CatsListProps) {
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
  componentDidMount(){
    this.props.fetchCats();    
  }

  handleClick = (evt: React.MouseEvent<HTMLElement>) => {
    if(evt.currentTarget.closest(".slick-center") == null){
      evt.preventDefault();
    }
  }
  
  renderList = () => {
    return this.props.categories.data && this.props.categories.data.map((el: any) => {
      console.log(el);
      return (
        <Link to={{
          pathname: `/archive/${el.id}`
        }}
        onClick={this.handleClick}
        key={el.id}>          
          <div 
            className="img-container" 
            style={{
              backgroundImage: `url("${el.imagem ? process.env.REACT_APP_API_URL+el.imagem.url : bgImage}")`
            }}>
          </div>
          <h3>{el.titulo}</h3>
        </Link>
      )
    })
  }

  render() {
    
    return (
      <GalleryStyled>
        <h1>Arquivo Fotográfico</h1>
        <h2>Escolha um tema para iniciar a sua exploração do nosso arquivo</h2>
        <Slider {...this.settings}>
          {this.renderList()}
        </Slider>
      </GalleryStyled>
    );
  }
}