import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

//  Layouts
import Empty from 'layouts/empty';

//  Screens
import HomeScreen from 'screens/Home';
import ArchiveScreen from 'screens/Archive';

export default () => (
  <BrowserRouter>
    <Switch>
      <Empty>
        <Route exact path="/" component={HomeScreen}/>
        <Route exact path="/archive" component={ArchiveScreen} />
      </Empty>
    </Switch>
  </BrowserRouter>
);