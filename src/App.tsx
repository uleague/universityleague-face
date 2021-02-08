import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Box, Button, Heading, Grommet, ResponsiveContext } from 'grommet';
import { Notification } from 'grommet-icons';
import { Landing } from './pages/Landing';
import { News } from './pages/News';
import { Blog } from './pages/Blog';
import { Partners } from './pages/Partners';

const theme = {
  global: {
    colors: {
      brand: '#1E202B',
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

const Header = (props: any) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: '1' }}
    {...props}
  />
);

export const App = () => {
  return (
    <Router>
      <Grommet theme={theme} full themeMode='dark'>
        <ResponsiveContext.Consumer>
          {(size) => (
            <Box fill>
              <Header>
                <Heading level='3' margin='none'>
                  ULeague
                </Heading>
                <Button icon={<Notification />} onClick={() => {}} />
              </Header>

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
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    </Router>
  );
};
