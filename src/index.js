import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './pages/HomePage';
import RouterController from './utils/Router';

ReactDOM.render(
  <div className='app'>
    <RouterController>
      <HomePage />
    </RouterController>
  </div>,
  document.getElementById('root')
);
