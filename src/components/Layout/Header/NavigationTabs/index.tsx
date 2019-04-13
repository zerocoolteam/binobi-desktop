import * as React from 'react';
import { NavLink } from 'react-router-dom';
import * as styles from '../style.css';

const home = require('../../../../../docs/img/nav_icons/home.svg');
const wallets = require('../../../../../docs/img/nav_icons/wallets.svg');
const settings = require('../../../../../docs/img/nav_icons/settings.svg');
const reports = require('../../../../../docs/img/nav_icons/reports.svg');

type Props = {};
type State = { key: string };

class NavigationTabs extends React.Component<Props, State> {
  render() {
    return (
      <div className={styles.subtract}>
        <nav>
          <ul>
            <li>
              <NavLink exact activeClassName="current" to="/">
                <span>
                  <img src={home} />
                  Home
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink exact activeClassName="current" to="/wallets">
                <div>
                  <img src={wallets} />
                  <span>Wallets</span>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink exact activeClassName="current" to="/reports">
                <img src={reports} />
                <span>Reports</span>
              </NavLink>
            </li>
            <li>
              <NavLink exact activeClassName="current" to="/settings">
                <img src={settings} />
                <span>Settings</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavigationTabs;
