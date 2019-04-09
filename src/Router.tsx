import * as React from 'react';
import { Route, Switch } from 'react-router';
import Home from './components/Home';
import Wallet from './components/Wallet';
import Reports from './components/Reports';
import Settings from './components/Settings';

class Router extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/wallets" component={Wallet} />
                <Route exact path="/reports" component={Reports} />
                <Route exact path="/settings" component={Settings} />
            </Switch>
        );
    }
}

export default Router;
