import * as React from 'react';
import { Route, Switch } from 'react-router';
import Home from './components/Home';
import Wallet from './components/Wallet';
import Reports from './components/Reports';
import Settings from './components/Settings';
import SettingBlock from './components/SettingsBlocks';

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/wallets" component={Wallet} />
      <Route path="/reports" component={Reports} />
      <Route path="/settings" component={Settings} />
      <Route
        path="/profile"
        component={() => <SettingBlock title={'Profile'} block={'profile'} />}
      />
      <Route
        path="/password"
        component={() => <SettingBlock title={'Profile'} block={'password'} />}
      />
      <Route path="/email" component={() => <SettingBlock title={'Email'} block={'email'} />} />
      <Route
        path="/phone"
        component={() => <SettingBlock title={'Phone number'} block={'phone'} />}
      />
      <Route
        path="/notifications"
        component={() => <SettingBlock title={'Notifications'} block={'notifications'} />}
      />
      <Route
        path="/currency"
        component={() => <SettingBlock title={'Currency'} block={'currency'} />}
      />
      <Route
        path="/language"
        component={() => <SettingBlock title={'Language'} block={'language'} />}
      />
      <Route
        path="/account"
        component={() => <SettingBlock title={'Account'} block={'account'} />}
      />
    </Switch>
  );
};

export default AppRouter;
