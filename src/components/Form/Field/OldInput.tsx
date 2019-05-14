import * as React from 'react';
import classNames from 'classnames';
import { IFieldProps } from './BaseField';

import * as styles from '../style.css';

import { IErrors } from '..';

export const OldInput: React.SFC<IFieldProps> = ({
  id,
  label,
  value,
  placeholder,
  onChange,
  onBlur,
  fieldStyle
}) => {
  return (
    <div className={classNames(fieldStyle, styles.input)}>
      <input
        id={id}
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        // className="form-control"
      />
      {(label || placeholder) && <label htmlFor={id}>{label || placeholder}</label>}
      {/* TODO - display validation error */}
    </div>
  );
};
