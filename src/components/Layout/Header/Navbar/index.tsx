import * as React from 'react';
import * as styles from '../style.css';

class Navbar extends React.Component {
    render() {
        return (
            <div className={styles.line}>
                <span className={styles.title}>Pay App</span>
                <span className={styles.profilePhoto}>
                    <img
                        className={styles.avatar}
                        src="https://i.stack.imgur.com/34AD2.jpg"
                        alt="avatar"
                    />
                    <span className={styles.notificationPresent} />
                </span>
            </div>
        );
    }
}

export default Navbar;
