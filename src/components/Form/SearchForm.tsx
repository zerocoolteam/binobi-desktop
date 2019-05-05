import * as React from 'react';
import Form from '.';

class SearchForm extends Form {
  protected async submitForm(): Promise<boolean> {
    return true;
  }
}

export default SearchForm;
