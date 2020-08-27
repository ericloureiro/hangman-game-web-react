import React from 'react';
import HomePage from './pages/HomePage';
import RouterController from './utils/Router';

const App = () => {
  return (
    <RouterController>
      <HomePage />
    </RouterController>
  );
};

export default App;
