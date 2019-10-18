import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";

import './index.scss';

/*  Utils */
import store from './store';

/*  Components  */
import App from './components/app';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
