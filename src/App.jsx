import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import ListenersContainer from './containers/ListenersContainer';


const App = () => (
  <Provider store={store} >
    <ListenersContainer />
  </Provider>
);

export default App;
