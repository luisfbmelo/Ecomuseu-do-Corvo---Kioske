import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';

// Get store from server
const initialState =  {};

// Create store
const store = configureStore(initialState);

export default (props: any) => (
  <Provider store={store}>  
		{props.children}
	</Provider>
);