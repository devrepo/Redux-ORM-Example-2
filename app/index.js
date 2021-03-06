import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {Board, selectors} from '../board';
import store from './store';
const App = () => {
  return (
    <Provider store={store}>
      <Board />
    </Provider>
  ) 
}
const div = document.createElement('div');
document.getElementsByTagName('body')[0].append(div);
render(<App />, div);
//console.log(selectors.getTasks(store.getState(), 1));
//console.log(selectors.getTasks(store.getState(), 1));
//console.log(selectors.getTasks(store.getState(), 1));
export { App as default, store};