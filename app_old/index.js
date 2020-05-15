import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {Board, actions} from '../board_old';
import store from './store';
const App = () => {
  return (
    <Provider store={store}>
      <Board />
    </Provider>
  ) 
}
const div = document.createElement('div1');
document.getElementsByTagName('body')[0].append(div);
render(<App />, div);
export { App as default, store};