import * as React from 'react';
import { NavLink } from 'react-router-dom';
import * as styles from '../style.css';

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
                                <span />
                                <span>Home</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact activeClassName="current" to="/wallets">
                                <span>Wallets</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact activeClassName="current" to="/reports">
                                <span>Reports</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact activeClassName="current" to="/settings">
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
