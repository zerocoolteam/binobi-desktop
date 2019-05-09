import * as React from 'react';

import { IErrors } from '..';

export interface IFieldProps {
  id: string;
  name?: string;
  label?: string;
  options?: string[];
  value?: any;
  placeholder?: string;
  fieldStyle?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FormEvent<HTMLInputElement>) => void;
}

class BaseField extends React.Component<IFieldProps, IFieldProps> {
  constructor(props: IFieldProps) {
    super(props);

    this.state = {
      label: this.props.label,
      id: this.props.id,
      value: this.props.value,
      placeholder: this.props.placeholder,
      fieldStyle: this.props.fieldStyle,
      onChange: this.props.onChange,
      onBlur: this.props.onBlur
    };
  }

  protected handleBlur(e: React.FormEvent<HTMLInputElement>) {
    return console.log(e);
  }

  protected handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: e.target.value });
    return console.log(e);
  }
}
export default BaseField;
