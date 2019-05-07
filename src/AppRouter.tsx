import * as React from 'react';
import { Route, Switch } from 'react-router';
import Home from './components/Home';
import Wallet from './components/Wallet';
import Reports from './components/Reports';
import Settings from './components/Settings';
import { Profile, Password, Email, Phone, Notifications } from './components/SettingsBlocks';

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/wallets" component={Wallet} />
      <Route path="/reports" component={Reports} />
      <Route path="/settings" component={Settings} />
      <Route path="/profile" component={Profile} />
      <Route path="/password" component={Password} />
      <Route path="/email" component={Email} />
      <Route path="/phone" component={Phone} />
      <Route path="/notifications" component={Notifications} />
    </Switch>
  );
};

export default AppRouter;
