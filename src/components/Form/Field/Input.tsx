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

  fieldStyle?: string;

  onChange?: (e: FormEvent<HTMLInputElement>) => void;

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
    <div className={fieldStyle}>
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
