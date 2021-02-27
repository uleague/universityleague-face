import React from 'react';
import styled from '@emotion/styled/macro';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Landing } from './pages/Landing';
import { Blogs } from './pages/Blogs';
import { Blog } from './pages/Blog';
import { Partners } from './pages/Partners';
import { Tournaments } from './pages/Tournaments';

const Main = styled.main``;

export const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Main>
        <Switch>
          <Route path='/blog'>
            <Blogs />
          </Route>
          <Route path='/blogs/:blogSlug' component={Blog} />
          <Route path='/partners'>
            <Partners />
          </Route>
          <Route path='/tournaments'>
            <Tournaments />
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
