import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Landing } from './pages/Landing';
import { News } from './pages/News';
import { Blog } from './pages/Blog';
import { Partners } from './pages/Partners';

import { ReactComponent as Logo } from './images/logo_sm.svg';

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/blog'>
          <Blog />
        </Route>
        <Route path='/news'>
          <News />
        </Route>
        <Route path='/partners'>
          <Partners />
        </Route>
        <Route path='/'>
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
};
