import * as React from 'react';
import { Link } from 'react-router-dom';
import EmailForm from './EmailForm';

import * as styles from '../style.css';
import { LeftArrow } from '../../../../docs/img';

export const Email = () => {
  return (
    <div className={styles.blockContainer}>
      <Link to="/settings">
        <div className={styles.goSettings}>
          <img src={LeftArrow} />
          <span>Settings</span>
        </div>
      </Link>

      <h1 className={styles.blockTitle}>Email</h1>

      <EmailForm />
    </div>
  );
};
