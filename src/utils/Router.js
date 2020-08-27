import HomePage from '../pages/HomePage';
import GamePage from '../pages/GamePage';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const RouterController = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/about' component={About}></Route>
        <Route path='/game'>
          <GamePage />
        </Route>
        <Route path='/'>
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

function About() {
  return <h2>About</h2>;
}

export default RouterController;
