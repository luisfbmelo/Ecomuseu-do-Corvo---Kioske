import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';

//  ============================================
//  Styles
//  ============================================
import ImageDetailsStyled, { ImageMetaStyled } from 'assets/theme/components/archive/imageDetailsStyle';

//  ============================================
//  Components
//  ============================================
import Backbutton from 'components/common/backButton';

//  ====================================================
//  Utils
//  ====================================================
import { Trans, withTranslation, WithTranslation } from 'react-i18next';

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

interface ImageDetailsProps extends RouteComponentProps<TParams>, WithTranslation{
  fetchImageDetails: (id: string, filters?: any) => void;
  fetchCategory: (id: string, filters?: any) => void;
  resetImage: () => void;
  resetCategory: () => void;
  image: IMAGE_INIT_TYPE;
  category: CAT_INIT_TYPE
}

interface ImageDetailsState {
}

class ImageDetails extends Component<ImageDetailsProps, ImageDetailsState>{
  fields: { name: string; label: string; }[];

  constructor(props: ImageDetailsProps) {
    super(props);
    
    //  Fields title for specific field name from API
    this.fields = [
      {
        name: 'descricao',
        label: this.props.t('Descrição')
      },
      {
        name: 'num_inventario',
        label: this.props.t('N.º de Inventário')
      },
      {
        name: 'proprietario',
        label: this.props.t('Proprietário')
      }
    ]
  }

  componentDidMount() {
    !this.props.category.fetched && this.props.fetchCategory(this.props.match.params.id_cat);
    !this.props.image.fetched && this.props.fetchImageDetails(this.props.match.params.id_image);
  }
  
  componentDidUpdate(prevProps: ImageDetailsProps) {
    if(prevProps.match.params.id_image!==this.props.match.params.id_image){
      this.requestNewData();
    }
  }
  
  requestNewData = () => {
    this.props.fetchImageDetails(this.props.match.params.id_image);
  }

  componentWillUnmount() {
    this.props.resetImage();
    this.props.resetCategory();
  }
  
  
  printMeta = () => {
    const tempData = this.props.image.data;

    const { language } = this.props.i18n;

    //  First, filter keys by those that can be shown in this page based on this.fields property. Must reduce this.fields array in order to get only the name of properties to filter.
    //  Second, filter keys that have a value that is not null
    return Object.keys(tempData)    
      //  1. Reduce name property to create an array of names
      //  2. Get names that exist in images array retrieved from API
      .filter((key: string) => this.fields.reduce((acc: Array<string>, cur: any) => [...acc, cur.name],[]).filter((key:string) => tempData[key]!==null).indexOf(key)>=0)
      .map((key: string) => {
        //  Get field object that matches the current key
        const fieldObj = this.fields.find((el: { name: string, label: string }) => el.name && key.indexOf(el.name)>=0);

        if(!fieldObj){
          return null;
        }

        //  Get value based on field object and its name. But first, check if there is any translation key
        const finalValueKey = tempData[`${fieldObj.name}_${language}`] && tempData[`${fieldObj.name}_${language}`]!=='' ?  `${fieldObj.name}_${language}` : fieldObj.name;

        //  Get value of that specific
        const value = fieldObj && tempData[finalValueKey];
        
        return (
          <article key={fieldObj && fieldObj.label}>
            <h6>{fieldObj && fieldObj.label}</h6>
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
          <Trans>Voltar a</Trans> <em>"{this.props.category.data.titulo}"</em>
        </Backbutton>
        <ImageMetaStyled>
          {this.printMeta()}
        </ImageMetaStyled>
      </ImageDetailsStyled>
    )
  }
}

export default withTranslation()(ImageDetails);