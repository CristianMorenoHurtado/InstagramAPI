import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { faSpinner, faHeart } from '@fortawesome/free-solid-svg-icons'
import {  } from '@fortawesome/free-regular-svg-icons';

import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faSpinner, faHeart)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


