import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  Box,
  Heading,
  Grommet,
  ResponsiveContext,
  Nav,
  Footer,
  Text,
  Anchor,
  Header,
} from 'grommet';
import { Landing } from './pages/Landing';
import { News } from './pages/News';
import { Blog } from './pages/Blog';
import { Partners } from './pages/Partners';

import { ReactComponent as Logo } from './images/logo_sm.svg';
import { customTheme } from './theme';

export const App = () => {
  return (
    <Router>
      <Grommet theme={customTheme} full themeMode='dark'>
        <ResponsiveContext.Consumer>
          {(size) => (
            <Box fill>
              <Header justify='start' gap='none' background='#292B36' pad='small'>
                <Logo />
                <Heading level='3' margin='none'>
                  ULEAGUE
                </Heading>
                <Nav direction='row'>
                  <Anchor label='Главная' href='/' />
                  <Anchor label='Турниры' href='/tournaments' />
                  <Anchor label='Новости' href='/news' />
                  <Anchor label='Блог' href='/blog' />
                </Nav>
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
              <Footer align='center' justify='center' background='#292B36' pad='large'>
                <Box gap='medium'>
                  <Box direction='row' justify='center' align='end'>
                    <Logo color='brand' />
                    <Heading level='3' margin='none'>
                      ULEAGUE
                    </Heading>
                  </Box>
                  <Box direction='row' justify='between'>
                    <Anchor>Турниры</Anchor>
                    <Anchor>Новости</Anchor>
                    <Anchor>Блог</Anchor>
                    <Anchor>Поддержка</Anchor>
                    <Anchor>Конфиденциальность</Anchor>
                  </Box>
                </Box>
              </Footer>
              <Footer background='#292B36' pad={{ horizontal: 'large', vertical: 'small' }}>
                <Text textAlign='center' size='small'>
                  © 2021 ULeague
                </Text>
                <Box direction='row' gap='small'>
                  {/* <Logo color='brand' /> */}
                </Box>
              </Footer>
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    </Router>
  );
};
