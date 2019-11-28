import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import CustomRoutes from './routes';
import * as serviceWorker from './serviceWorker';

import { I18nextProvider } from "react-i18next";
import "translations/i18n";

ReactDOM.render(
<Root>  
  <CustomRoutes />
</Root>
, document.getElementById('root'));

serviceWorker.unregister();