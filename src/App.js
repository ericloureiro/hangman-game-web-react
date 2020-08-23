import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import RouterController from './utils/Router';

function App() {
  return (
    <div className='App'>
      <RouterController>
        <HomePage />
      </RouterController>
    </div>
  );
}

export default App;
