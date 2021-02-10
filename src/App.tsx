import React from 'react';
import { Header } from './components/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Landing } from './pages/Landing';
import { News } from './pages/News';
import { Blog } from './pages/Blog';
import { Partners } from './pages/Partners';


export const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <main>
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
      </main>
    </Router>
  );
};
