import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
import * as serviceWorker from './serviceWorker';

// Get store from server
const initialState =  {};

// Create store
const store = configureStore(initialState);

serviceWorker.unregister();

export default (props: any) => (
  <Provider store={store}>  
		{props.children}
	</Provider>
);