import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/styles/style.css';

ReactDOM.render(
  <Suspense fallback={<div>Loading...</div>}>
    <App />
  </Suspense>,
  document.getElementById('app')
);