import * as React from 'react';
import * as styles from '../style.css';
import classNames from 'classnames';

import { IFieldProps } from './BaseField';

import { IErrors } from '..';

interface IRadio extends IFieldProps {
  checked?: boolean;
}

export const NotificationInput: React.SFC<IRadio> = ({
  id,
  label,
  value,
  placeholder,
  onChange,
  onBlur,
  fieldStyle,
  checked
}) => {
  return (
    <div className={classNames(fieldStyle)}>
      <input
        id={id}
        type="radio"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        checked={checked}
        // className="form-control"
      />
      {(label || placeholder) && <label htmlFor={id}>{label || placeholder}</label>}
      {/* TODO - display validation error */}
    </div>
  );
};
