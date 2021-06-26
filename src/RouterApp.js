import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import Home from './components/pages/home/Home';
import Skills from './components/pages/skills/Skills';
import Portfolio from './components/pages/portfolio/Portfolio';
import Contact from './components/pages/contact/Contact';

const RouterApp = () => {
  return (
    <>
      <Switch>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/skills'>
          <Skills />
        </Route>
        <Route path='/portfolio'>
          <Portfolio />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Redirect to='/home' />
      </Switch>
    </>
  );
};

export default RouterApp;
