import * as React from 'react';

import { IErrors } from '..';

import Field from './index';

class SearchInput extends Field {
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

export default SearchInput;
