import * as React from 'react';
import Form from '.';

class NewCardForm extends Form {
  protected async submitForm(): Promise<boolean> {
    return true;
  }
}

export default NewCardForm;
