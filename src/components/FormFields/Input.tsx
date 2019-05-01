import * as React from 'react';

interface IInput {
  value?: string | number;
  type: string;
  label: string;
  onChange(event: any): void;
}

export const Input = ({ type, value, onChange, label }: IInput) => {
  return (
    <div>
      <input type={type} value={value} onChange={onChange} placeholder={label} />
    </div>
  );
};
