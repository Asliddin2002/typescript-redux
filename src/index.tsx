import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux"
import {store} from './TODO/store/Store'



    const rootNode = document.getElementById('root') as HTMLElement;
    ReactDOM.render(
      <Provider store = {store}>
      <App />
    </Provider> 
      , rootNode);

