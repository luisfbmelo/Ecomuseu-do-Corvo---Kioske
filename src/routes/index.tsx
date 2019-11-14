import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

//  Generic components
import { TransitionGroup, CSSTransition } from 'react-transition-group';

//  Layouts
import Empty from 'containers/layouts/emptyContainer';

//  Screens
import HomeScreen from 'screens/Home';
import ArchiveScreen from 'screens/Archive';

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
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </Empty>
        );
      }}
    />
    
  </BrowserRouter>
);