import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { SnackbarProvider } from 'notistack';

ReactDOM.render(
  <SnackbarProvider maxSnack={3}>
    <div className='app'>
      <App />
    </div>
  </SnackbarProvider>,
  document.getElementById('root')
);
