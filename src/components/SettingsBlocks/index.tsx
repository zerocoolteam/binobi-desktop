import * as React from 'react';
import { Link } from 'react-router-dom';

import ProfileForm from './ProfileForm';
import PhoneForm from './PhoneForm';
import EmailForm from './EmailForm';
import PasswordForm from './PasswordForm';
import NotificationsForm from './NotificationsForm';
import CurrencyForm from './CurrencyForm';
import SearchForm from '../Common/SearchForm';
import AccountForm from '../Common/AccountForm';
import LanguageForm from './LanguageForm';
import { Handler } from '../../helpers/Icon/IconHandler';

import { LeftArrow } from '../../assets/img';
import * as styles from './style.css';

interface ISettingsBlock {
  title: string;
  block: string;
  search?: boolean;
  inputLabel?: string;
  smallTitle?: string;
  iconHandler?: Handler;
}

const SettingsBlock = ({
  title,
  smallTitle,
  search,
  inputLabel,
  block,
  iconHandler
}: ISettingsBlock) => {
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
        return (
          <NotificationsForm submitButton submitButtonText={'Apply'} iconHandler={iconHandler} />
        );
      case 'currency':
        return (
          <CurrencyForm
            submitButton
            submitButtonText={'Change currency'}
            iconHandler={iconHandler}
          />
        );
      case 'language':
        return (
          <LanguageForm
            submitButton
            submitButtonText={'Change language'}
            iconHandler={iconHandler}
          />
        );
      case 'account':
        return <AccountForm />;
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

      <div className={styles.formContainer}>
        {smallTitle && <span className={styles.smallBlockTitle}>{smallTitle}</span>}

        {search && <SearchForm submitButtonText={inputLabel} formStyles={styles.noPaddingBottom} />}

        {getBlock()}
      </div>
    </div>
  );
};

export default SettingsBlock;
