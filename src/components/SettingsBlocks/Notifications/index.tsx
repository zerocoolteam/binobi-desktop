import * as React from 'react';
import { Link } from 'react-router-dom';
import NotificationsForm from './NotificationsForm';

import * as styles from '../style.css';
import { LeftArrow } from '../../../../docs/img';

export const Notifications = () => {
  return (
    <div className={styles.blockContainer}>
      <Link to="/settings">
        <div className={styles.goSettings}>
          <img src={LeftArrow} />
          <span>Settings</span>
        </div>
      </Link>

      <h1 className={styles.blockTitle}>Email</h1>

      <NotificationsForm />
    </div>
  );
};

export default Notifications;
