import * as React from 'react';
import ProfileForm from './ProfileForm';
import { Link } from 'react-router-dom';

import * as styles from '../style.css';
import * as formStyles from '../../Form/style.css';
import { LeftArrow } from '../../../../docs/img';

export const Profile = () => {
  // TODO: add photo upload functional

  return (
    <div className={styles.blockContainer}>
      <Link to="/settings">
        <div className={styles.goSettings}>
          <img src={LeftArrow} />
          <span>Settings</span>
        </div>
      </Link>

      <h1 className={styles.blockTitle}>Profile</h1>

      <ProfileForm />
    </div>
  );
};
