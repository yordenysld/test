import React from 'react';
import ReactDOM from 'react-dom';
import AppView from './component/appView';
import { Provider } from 'react-redux';
import store from './Redux/Store'

ReactDOM.render(
  <Provider store={store}>
    <AppView />
  </Provider>,
  document.getElementById('root')
);
