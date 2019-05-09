import * as React from 'react';
import * as styles from '../style.css';
import classNames from 'classnames';

import { IFieldProps } from './BaseField';

import { IErrors } from '..';

interface IToggle extends IFieldProps {
  isChecked: boolean;
  checkedClass?: string;
}

export const Toggle: React.SFC<IToggle> = ({ id, onChange, isChecked, name }) => {
  return (
    <label className={classNames(styles.toggleInput, styles.switcher)}>
      <input type="checkbox" name={name} checked={isChecked} onChange={onChange} />
      <div className={styles.slider} />
    </label>
  );
};
