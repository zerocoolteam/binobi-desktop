import * as React from 'react';

import { IErrors } from '..';
import { FormEvent } from 'react';

export interface IFieldProps {
  /* The unique field name */
  id: string;

  /* The label text for the field */
  label?: string;

  /* The field value */
  value?: any;
  placeholder?: string;

  onChange: (e: FormEvent<HTMLInputElement>) => void;

  onBlur: (e: React.FormEvent<HTMLInputElement>) => void;
}

const Input: React.SFC<IFieldProps> = ({ id, label, value, placeholder, onChange, onBlur }) => {
  return (
    <div className="form-group">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        className="form-control"
      />
      {/* TODO - display validation error */}
    </div>
  );
};

export default Input;
