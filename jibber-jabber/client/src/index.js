import React from 'react';
import ReactDOM from 'react-dom';

//INITIALIZING REDUX
import { Provider } from 'react-redux'; //keep track of that store, allows access to that store from anywhere inside of the app
                                        //I don't have to be in a child componenet or a parent component, I can access that state
                                        //from anywhere 
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { reducers } from './reducers';
import App from './App';
import './index.css';

//to set redux, I have to set the store
const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);