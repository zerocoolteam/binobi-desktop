import * as React from 'react';
import Form from '../../Form';
import * as styles from '../style.css';
import { Input } from '../../Form/Field';

export default class PhoneForm extends Form {
  protected async submitForm(): Promise<boolean> {
    return true;
  }

  // TODO: add verify phone functional
  protected renderFields(): React.ReactNode {
    return (
      <div>
        <span className={styles.smallBlockTitle}>Change phone number</span>

        <Input id="phone" placeholder="Phone number" />
        <Input id="newPhone" placeholder="New phone number" />
        <Input id="phoneConfirmation" placeholder="Confirm new phone number" />
      </div>
    );
  }
}
