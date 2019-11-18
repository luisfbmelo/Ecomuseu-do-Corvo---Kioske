import React, { Component, Fragment } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';

//  ============================================
//  Styles
//  ============================================
import CatsListStyled from 'assets/theme/components/archive/catsListStyle';

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

//  ============================================
//  Components
//  ============================================

class CatsList extends Component<CatsListProps, CatsListState>{
  constructor(props: CatsListProps) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchCats();    
  }

  componentDidUpdate(){
    console.log(this.props);
  }

  renderList = () => {
    return this.props.categories.data && this.props.categories.data.map((el: any) => (
      <li key={el.id} className={el.id===parseInt(this.props.match.params.id_cat) ? 'active' : ''}>
        {el.id===parseInt(this.props.match.params.id_cat) ? 
          <span>{el.titulo}</span>
        :
        <Link to={`/archive/${el.titulo}`}>
          {el.titulo}
        </Link>
        }
        
      </li>
    ))
  }

  shouldComponentUpdate(nextProps: CatsListProps, nextState: CatsListState){
    return nextProps.categories.fetched && !this.props.categories.fetched;
  }

  render() {
    if(this.props.categories.data && this.props.categories.data.length==0){
      return null;
    }

    return <CatsListStyled>
      <ul>
        {this.renderList()}
      </ul>
    </CatsListStyled>
  }
  
}

export default CatsList;