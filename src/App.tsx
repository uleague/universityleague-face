import React from 'react';
import styled from '@emotion/styled/macro';

import { Header } from './components/Header';
import { Footer } from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Landing } from './pages/Landing';
import { News } from './pages/News';
import { Blog } from './pages/Blog';
import { Partners } from './pages/Partners';

const Main = styled.main``;

export const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Main className='p-3'>
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
      </Main>
      <Footer />
    </Router>
  );
};
