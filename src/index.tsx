import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import CustomRoutes from './routes';

/* import * as Sentry from '@sentry/browser'; */

// Init Sentry for error reporting
/* Sentry.init({
 dsn: "https://c9a61739991f4b0d9fd069156e23a716@sentry.io/1338793"
}); */


ReactDOM.render(
<Root>  
  <CustomRoutes />
</Root>
, document.getElementById('root'));
