import * as React from 'react';
import Form from '../../Form';
import * as styles from '../style.css';
import Input from '../../Form/Field/Input';

export default class EmailForm extends Form {
  protected async submitForm(): Promise<boolean> {
    return true;
  }

  protected renderFields(): React.ReactNode {
    return (
      <div>
        <span className={styles.smallBlockTitle}>Change email</span>

        <Input id={'email'} label={'Email'} />
        <Input id="newEmail" label="New email" />
        <Input id="emailConfirmation" label="Confirm new email" />
      </div>
    );
  }
}
