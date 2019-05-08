import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Wallets, Settings, Reports, Send } from '../../../../assets/img';

import * as styles from '../style.css';

type Props = {};
type State = { key: string };

class NavigationTabs extends React.Component<Props, State> {
  render() {
    return (
      <div className={styles.subtract}>
        <div className={styles.mainRow}>
          <div className={styles.firstColumn}>
            <NavLink exact activeClassName={styles.current} to="/">
              <div className={styles.unit}>
                <img src={Home} />
                <span>Home</span>
              </div>
            </NavLink>
            <NavLink activeClassName={styles.current} to="/wallets">
              <div className={styles.unit}>
                <img src={Wallets} />
                <span>Wallets</span>
              </div>
            </NavLink>
          </div>

          {/* TODO: add circle background */}
          <div className={styles.sendMoney}>
            <img src={Send} />
          </div>

          <div className={styles.secondColumn}>
            <NavLink activeClassName={styles.current} to="/reports">
              <div className={styles.unit}>
                <img src={Reports} />
                <span>Reports</span>
              </div>
            </NavLink>
            <NavLink activeClassName={styles.current} to="/settings">
              <div className={styles.unit}>
                <img src={Settings} />
                <span>Settings</span>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default NavigationTabs;
