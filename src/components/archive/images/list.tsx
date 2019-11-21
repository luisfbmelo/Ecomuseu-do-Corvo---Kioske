import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';

//  ============================================
//  Styles
//  ============================================
import ImagesListStyled, { LinkStyled, ArticleStyled } from 'assets/theme/components/archive/imagesListStyle';

//  ============================================
//  Components
//  ============================================


//  ============================================
//  Types
//  ============================================
import { INITIAL_TYPE } from 'reducers/images';

//  ============================================
//  Interface
//  ============================================
//  React Router params

interface TParams {
  id_cat: string
};

interface ImagesListProps extends RouteComponentProps<TParams>{
  fetchImages: (filters?: any) => void;
  images: INITIAL_TYPE
}

interface ImagesListState {
}

class ImagesListContainer extends Component<ImagesListProps, ImagesListState>{
  /* constructor(props: ImagesListProps) {
    super(props);
  } */

  componentDidMount(){
    this.requestNewData();
  }

  componentDidUpdate(prevProps: ImagesListProps) {
    if(prevProps.location.key!==this.props.location.key){
      this.requestNewData();
    }
  }

  requestNewData = () => {
    this.props.fetchImages({
      'categorias': this.props.match.params.id_cat
    });
  }
  

  renderList = () => {
    return this.props.images.data && this.props.images.data.map((el: any) => (
      <ArticleStyled key={el.id}>
        <div>
          <LinkStyled to={`/archive/${this.props.match.params.id_cat}/image/${el.id}`} bgimage={process.env.REACT_APP_API_URL+el.imagem.url} />
        </div>
      </ArticleStyled>
    ))
  }

  render() {
    if(this.props.images.data && this.props.images.data.length===0){
      return null;
    }

    return <ImagesListStyled>
      {this.renderList()}
    </ImagesListStyled>
  } 
  
}

export default ImagesListContainer;