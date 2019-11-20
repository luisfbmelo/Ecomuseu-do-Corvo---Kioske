import React, { Component, useRef, RefObject } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';

//  ============================================
//  Styles
//  ============================================
import ImageDetailsStyled, { ImageMetaStyled } from 'assets/theme/components/archive/imageDetailsStyle';

//  ============================================
//  Components
//  ============================================
import Backbutton from 'components/common/backButton';

//  ============================================
//  Types
//  ============================================
import { INITIAL_TYPE as CAT_INIT_TYPE } from 'reducers/cats';
import { INITIAL_TYPE as IMAGE_INIT_TYPE } from 'reducers/images';

//  ============================================
//  Interface
//  ============================================
//  React Router params
interface TParams {
  id_cat: string,
  id_image: string
};

interface ImageDetailsProps extends RouteComponentProps<TParams>{
  fetchImageDetails: (id: string, filters?: any) => void;
  fetchCategory: (id: string, filters?: any) => void;
  resetImage: () => void;
  resetCategory: () => void;
  image: IMAGE_INIT_TYPE;
  category: CAT_INIT_TYPE
}

interface ImageDetailsState {
}

export default class ImageDetails extends Component<ImageDetailsProps, ImageDetailsState>{
  fields: { name: string; label: string; }[];

  constructor(props: ImageDetailsProps) {
    super(props);
    
    //  Fields title for specific field name from API
    this.fields = [
      {
        name: 'descricao',
        label: 'Descrição'
      },
      {
        name: 'num_inventario',
        label: 'N.º de Inventário'
      },
      {
        name: 'proprietario',
        label: 'Proprietário'
      }
    ]
  }

  componentDidMount() {
    !this.props.category.fetched && this.props.fetchCategory(this.props.match.params.id_cat);
    !this.props.image.fetched && this.props.fetchImageDetails(this.props.match.params.id_image);
  }

  componentWillUnmount() {
    this.props.resetImage();
    this.props.resetCategory();
  }
  
  
  printMeta = () => {
    const tempData = this.props.image.data;

    //  First, filter keys by those that can be shown in this page based on this.fields property. Must reduce this.fields array in order to get only the name of properties to filter.
    //  Second, filter keys that have a value that is not null
    return Object.keys(tempData)
      .filter((key: string) => this.fields.reduce((acc: Array<string>, cur) => [...acc, cur.name],[])
      .filter((key:string) => tempData[key]!==null).indexOf(key)>=0)
      .map((key: string) => {
        const dataObj = this.fields.find((el: { name: string, label: string }) => el.name && el.name===key);
        const value = dataObj && tempData[dataObj.name];
        return (
          <article key={dataObj && dataObj.label}>
            <h3>{dataObj && dataObj.label}</h3>
            <p dangerouslySetInnerHTML={{__html: value.replace(/\n/g,"<br />")}}></p>
          </article>
        )
      });
  }
  
  render(){
    if(!this.props.category.data || !this.props.image.data){
      return null;
    }

    return (
      <ImageDetailsStyled>
        <Backbutton prevLink={`/archive/${this.props.match.params.id_cat}`}>
          Voltar a <em>"{this.props.category.data.titulo}"</em>
        </Backbutton>
        <ImageMetaStyled>
          {this.printMeta()}
        </ImageMetaStyled>
      </ImageDetailsStyled>
    )
  }
}