import * as React from 'react';
import { NavLink } from 'react-router-dom';

import * as style from './style.css';
import {
  Profile,
  Password,
  TermsOfUs,
  PrivacyPolice,
  Account,
  Language,
  Currency,
  Notifications,
  Phone,
  Email
} from '../../assets/img';

const Settings = () => {
  return (
    <div className={style.settingsContainer}>
      <h1 className={style.title}>Settings</h1>

      <div className={style.settingsRow}>
        <NavLink to="/profile">
          <div className={style.settingsBlock}>
            <img src={Profile} />
            <span>Profile Information</span>
          </div>
        </NavLink>
        <NavLink to="/password">
          <div className={style.settingsBlock}>
            <img src={Password} />
            <span>Password</span>
          </div>
        </NavLink>
      </div>
      <div className={style.settingsRow}>
        <NavLink to="/email">
          <div className={style.settingsBlock}>
            <img src={Email} />
            <span>Email</span>
          </div>
        </NavLink>
        <NavLink to="/phone">
          <div className={style.settingsBlock}>
            <img src={Phone} />
            <span>Phone Number</span>
          </div>
        </NavLink>
      </div>
      <div className={style.settingsRow}>
        <NavLink to="/notifications">
          <div className={style.settingsBlock}>
            <img src={Notifications} />
            <span>Notifications</span>
          </div>
        </NavLink>
        <NavLink to="/currency">
          <div className={style.settingsBlock}>
            <img src={Currency} />
            <span>Currency</span>
          </div>
        </NavLink>
      </div>
      <div className={style.settingsRow}>
        <NavLink to="/language">
          <div className={style.settingsBlock}>
            <img src={Language} />
            <span>Language</span>
          </div>
        </NavLink>
        <NavLink to="/account">
          <div className={style.settingsBlock}>
            <img src={Account} />
            <span>Account</span>
          </div>
        </NavLink>
      </div>
      <div className={style.settingsRow}>
        <NavLink to="/privacy_police">
          <div className={style.settingsBlock}>
            <img src={PrivacyPolice} />
            <span>Privacy Police</span>
          </div>
        </NavLink>
        <NavLink to="/terms_of_us">
          <div className={style.settingsBlock}>
            <img src={TermsOfUs} />
            <span>Terms of Us</span>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Settings;
