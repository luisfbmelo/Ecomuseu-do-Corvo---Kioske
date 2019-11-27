import React from 'react';
import { Route, MemoryRouter, Switch } from 'react-router-dom';

//  Generic components
/* import { TransitionGroup, CSSTransition } from 'react-transition-group'; */

//  Layouts
import Empty from 'layouts/empty';

//  Screens
import HomeScreen from 'screens/Home';
import ArchiveScreen from 'screens/Archive/Archive';
import CatArchiveScreen from 'screens/Archive/CatArchive';
import ImageDetailsScreen from 'screens/Archive/ImageDetails';
import VisitWebpageScreen from 'screens/Visit/Webpage';
import VideosScreen from 'screens/Videos/VideosArchive';
import SettingsScreen from 'screens/Settings';

/* export default () => (
  <MemoryRouter>
    <Route
      render={({ match, location }) => {
        return (
          <Empty>
            <TransitionGroup>
              <CSSTransition
                timeout={250}
                classNames="page"
                key={match.path}
              >
                <Switch location={location}>
                    <Route exact path="/" component={HomeScreen}/>
                    <Route exact path="/archive" component={ArchiveScreen} />
                    <Route exact path="/archive/:id_cat" component={CatArchiveScreen} />
                    <Route exact path="/archive/:id_cat/image/:id_image" component={ImageDetailsScreen} />
                    <Route exact path="/visit" component={VisitWebpageScreen} />
                    <Route exact path="/videos" component={VideosScreen} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </Empty>
        );
      }}
    />
    
  </MemoryRouter>
); */

export default () => (
  <MemoryRouter>
    <Route>
      <Empty>
        <Switch>
          <Route exact path="/" component={HomeScreen}/>
          <Route exact path="/archive" component={ArchiveScreen} />
          <Route exact path="/archive/:id_cat" component={CatArchiveScreen} />
          <Route exact path="/archive/:id_cat/image/:id_image" component={ImageDetailsScreen} />
          <Route exact path="/visit" component={VisitWebpageScreen} />
          <Route exact path="/videos" component={VideosScreen} />
          <Route exact path="/settings" component={SettingsScreen} />          
        </Switch>
      </Empty>
    </Route>
  </MemoryRouter>
);