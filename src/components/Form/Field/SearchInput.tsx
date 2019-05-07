import * as React from 'react';

import { IErrors } from '..';

import BaseField from './BaseField';

export class SearchInput extends BaseField {
  render() {
    const { id, value, placeholder, fieldStyle } = this.state;

    return (
      <div className={fieldStyle}>
        <input
          id={id}
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
        />
        {/* TODO - display validation error */}
      </div>
    );
  }
}
