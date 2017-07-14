import React from 'react';
import ReactDOM from 'react-dom';
import SchedulerApp from './components/SchedulerApp';

import reducer from './reducers/index';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

let store = createStore(reducer);

// const hi = React.createElement('p', null, 'Hi');

ReactDOM.render(
  <Provider>
    <SchedulerApp store={store}/>
  </Provider>,
   document.getElementById('root')
);
