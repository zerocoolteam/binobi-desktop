import * as React from 'react';
import { Link } from 'react-router-dom';

import ProfileForm from './ProfileForm';
import PhoneForm from './PhoneForm';
import EmailForm from './EmailForm/EmailForm';
import PasswordForm from './PasswordForm';
import NotificationsForm from './NotificationsForm';
import CurrencyForm from './CurrencyForm/CurrencyForm';

import { LeftArrow } from '../../assets/img';
import * as styles from './style.css';

interface ISettingsBlock {
  title: string;
  block: string;
}

const SettingsBlock = ({ title, block }: ISettingsBlock) => {
  const getBlock = () => {
    switch (block) {
      case 'profile':
        return <ProfileForm submitButton submitButtonText={'Save changes'} />;
      case 'phone':
        return (
          <PhoneForm
            submitButton
            submitButtonText={'Change phone number'}
            submitFormButtonStyles={styles.largeMarginTop}
          />
        );
      case 'email':
        return (
          <EmailForm
            submitButton
            submitButtonText={'Change email'}
            submitFormButtonStyles={styles.largeMarginTop}
          />
        );
      case 'password':
        return (
          <PasswordForm
            submitButton
            submitButtonText={'Change password'}
            submitFormButtonStyles={styles.largeMarginTop}
          />
        );
      case 'notifications':
        return <NotificationsForm submitButton submitButtonText={'Apply'} />;
      case 'currency':
        return <CurrencyForm submitButton submitButtonText={'Change currency'} />;
    }
  };

  return (
    <div className={styles.blockContainer}>
      <Link to="/settings">
        <div className={styles.goSettings}>
          <img src={LeftArrow} />
          <span>Settings</span>
        </div>
      </Link>

      <h1 className={styles.blockTitle}>{title}</h1>

      {getBlock()}
    </div>
  );
};

export default SettingsBlock;
