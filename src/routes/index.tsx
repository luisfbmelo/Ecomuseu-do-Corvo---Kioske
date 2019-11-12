import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

//  Layouts
import Empty from 'layouts/empty';

//  Components
import App from 'screens/App';

export default () => (
  <Router>
    <Empty>
      <Route path="/" component={App}>
      </Route>
    </Empty>
  </Router>
);