import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios'
import App from './App';

import env from './env'

if (env === 'production') {
  // axios.defaults.baseURL = 'https://production-url'
} else {
  axios.defaults.baseURL = 'http://localhost:3001'
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
