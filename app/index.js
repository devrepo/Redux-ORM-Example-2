import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {Board} from '../board';
import store from './store';
const App = () => {
  return (
    <Provider store={store}>
      <Board />
    </Provider>
  ) 
}

export default App;