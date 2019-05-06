import * as React from 'react';
import * as styles from '../style.css';
import classNames from 'classnames';

import { IErrors } from '..';

export interface IFieldProps {
  /* The unique field name */
  id: string;

  /* The label text for the field */
  label?: string;

  /* The field value */
  value?: any;
  placeholder?: string;

  fieldStyle?: string;

  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;

  onBlur?: (e: React.FormEvent<HTMLInputElement>) => void;
}

const Input: React.SFC<IFieldProps> = ({
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

export default Input;
