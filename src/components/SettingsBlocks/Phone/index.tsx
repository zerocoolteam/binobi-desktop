import * as React from 'react';
import { Link } from 'react-router-dom';
import PhoneForm from './PhoneForm';

import * as styles from '../style.css';
import { LeftArrow } from '../../../../docs/img';

export const Phone = () => {
  // TODO: add verify phone functional

  return (
    <div className={styles.blockContainer}>
      <Link to="/settings">
        <div className={styles.goSettings}>
          <img src={LeftArrow} />
          <span>Settings</span>
        </div>
      </Link>

      <h1 className={styles.blockTitle}>Phone number</h1>

      <PhoneForm />
    </div>
  );
};
