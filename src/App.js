import React from 'react';

import { Provider } from 'react-redux';
import store from './store';

import Search from './Search';
import Details from './Details';

const App = () => (
  <div className="m-3">
    <Search />
    <div className="my-3">
      <Details />
    </div>
  </div>
);

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
