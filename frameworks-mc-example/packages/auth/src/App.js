import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Signin from './components/Signin';
import Signup from './components/Signup';

const generateClassName = createGenerateClassName({
  productionPrefix: 'auth'
})

export const App = ({ history }) => {
  console.log('history', history)
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path="/auth/signup" component={Signup} />
            <Route path="/auth/signin" component={Signin} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};