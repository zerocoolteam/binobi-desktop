import * as React from 'react';
import Navbar from './Navbar';
import NavigationTabs from './NavigationTabs';
import * as styles from './style.css';

class Header extends React.Component {
    render() {
        return (
            <div className={styles.navigation}>
                <div className={styles.background}>
                    <Navbar />
                    <NavigationTabs />
                </div>
            </div>
        );
    }
}

export default Header;
