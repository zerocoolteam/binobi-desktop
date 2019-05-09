import * as React from 'react';
import { Route, Switch } from 'react-router';
import Home from './components/Home';
import Wallet from './components/Wallet';
import Reports from './components/Reports';
import Settings from './components/Settings';
import SettingBlock from './components/SettingsBlocks';
import IconClockHandler from './helpers/Icon/IconClockHandler';
import IconCurrencyHandler from './helpers/Icon/IconCurrencyHandler';
import IconLanguageHandler from './helpers/Icon/IconLanguageHandler';
import { Handler } from './helpers/Icon/IconHandler';

class AppRouter extends React.Component {
  readonly iconHandler: Handler;

  constructor(props: any) {
    super(props);

    const iconClockHandler = new IconClockHandler();
    const iconCurrencyHandler = new IconCurrencyHandler();
    const iconLanguageHandler = new IconLanguageHandler();
    iconClockHandler.setNext(iconCurrencyHandler).setNext(iconLanguageHandler);

    this.iconHandler = iconClockHandler;
  }

  render() {
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
          component={() => (
            <SettingBlock
              title={'Notifications'}
              block={'notifications'}
              iconHandler={this.iconHandler}
            />
          )}
        />
        <Route
          path="/currency"
          component={() => (
            <SettingBlock
              search
              smallTitle={'Change local currency'}
              inputLabel={'Search currency'}
              title={'Currency'}
              block={'currency'}
              iconHandler={this.iconHandler}
            />
          )}
        />
        <Route
          path="/language"
          component={() => (
            <SettingBlock
              search
              title={'Language'}
              block={'language'}
              iconHandler={this.iconHandler}
            />
          )}
        />
        <Route
          path="/account"
          component={() => <SettingBlock title={'Account'} block={'account'} />}
        />
      </Switch>
    );
  }
}

export default AppRouter;
