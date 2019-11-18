import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

//  Generic components
import { TransitionGroup, CSSTransition } from 'react-transition-group';

//  Layouts
import Empty from 'containers/layouts/emptyContainer';

//  Screens
import HomeScreen from 'screens/Home';
import ArchiveScreen from 'screens/Archive/Archive';
import CatArchiveScreen from 'screens/Archive/CatArchive';

export default () => (
  <BrowserRouter>
    <Route
      render={({ location }) => {
        return (
          <Empty>
            <TransitionGroup component={null}>
              <CSSTransition
                timeout={250}
                classNames="page"
                key={location.key}
              >
                <Switch location={location}>
                    <Route exact path="/" component={HomeScreen}/>
                    <Route exact path="/archive" component={ArchiveScreen} />
                    <Route exact path="/archive/:id_cat" component={CatArchiveScreen} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </Empty>
        );
      }}
    />
    
  </BrowserRouter>
);