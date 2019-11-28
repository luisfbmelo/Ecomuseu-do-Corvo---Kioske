import React, { Component, RefObject } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';

//  ============================================
//  Styles
//  ============================================
import CatsListStyled from 'assets/theme/components/archive/catsListStyle';

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
import { INITIAL_TYPE } from 'reducers/cats';

//  ============================================
//  Interface
//  ============================================
//  React Router params
interface TParams {
  id_cat: string
};

interface CatsListProps extends RouteComponentProps<TParams>, WithTranslation{
  fetchCats: () => void;
  categories: INITIAL_TYPE
}

interface CatsListState {
}

class CatsList extends Component<CatsListProps, CatsListState>{ 
  activeElRef: React.RefObject<HTMLLIElement>;
  scrollableEl: React.RefObject<HTMLUListElement>;

  constructor(props: CatsListProps) {
    super(props);
    this.activeElRef = React.createRef();
    this.scrollableEl = React.createRef();
  }

  componentDidMount(){
    this.props.fetchCats();

    //  On first render, scroll page to active element
    if(this.activeElRef.current && this.scrollableEl.current){
      const rect = this.activeElRef.current.getBoundingClientRect();
      const elemTop = rect.top;
      const elemBottom = rect.bottom;

      // Only completely visible elements return true:
      const isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);

      if(isVisible===false){
        this.scrollableEl.current.scrollTo(0, this.activeElRef.current.offsetTop-100);
      }
    }  
  }
  
  renderList = () => {
    const tempList = this.props.categories.data /* && this.props.categories.data.filter((el: any) => el.arquivos!==null && el.arquivos.length>0) */;

    return tempList && tempList.map((el: any) => {
      const isActive = el.id===parseInt(this.props.match.params.id_cat);

      let elProps: {key: number, className: string, ref?: RefObject<HTMLLIElement>} = {
        key: el.id,
        className: isActive ? 'active' : ''
      }

      if(isActive){
        elProps.ref = this.activeElRef;
      }

      //  Get translated
      const title = el[`titulo_${this.props.i18n.language}`] ? el[`titulo_${this.props.i18n.language}`] : el.titulo ? el.titulo : '';

      return (
        <li 
            {...elProps}
          >
          {el.id===parseInt(this.props.match.params.id_cat) ? 
            <span>{title}</span>
          :
            <Link to={`/archive/${el.id}`}>
              {title}
            </Link>
          }
          
        </li>
      )
    })
  }

  render() {
    if(this.props.categories.data && this.props.categories.data.length===0){
      return null;
    }

    return <CatsListStyled>
      <Backbutton prevLink="/archive">
        <Trans>Arquivo Fotográfico</Trans>
      </Backbutton>
      <ul ref={this.scrollableEl}>
        {this.renderList()}
      </ul>
    </CatsListStyled>
  }
  
}

export default withTranslation()(CatsList);