import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import Tester from './containers/Tester';


const App = () => (
  <Provider store={store} >
    <div>
      <Tester />
    </div>
  </Provider>
);

export default App;
