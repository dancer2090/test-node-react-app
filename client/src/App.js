import React from 'react';

import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import User from './pages/User';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/user/:slug' component={User} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
