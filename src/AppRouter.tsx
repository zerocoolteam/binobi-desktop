import * as React from 'react';
import { Route, Switch } from 'react-router';
import Home from './components/Home';
import Wallet from './components/Wallet';
import Reports from './components/Reports';
import Settings from './components/Settings';

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/wallets" component={Wallet} />
      <Route path="/reports" component={Reports} />
      <Route path="/settings" component={Settings} />
    </Switch>
  );
};

export default AppRouter;
