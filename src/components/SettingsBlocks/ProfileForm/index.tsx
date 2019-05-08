import * as React from 'react';
import Form from '../../Form';
import * as styles from '../style.css';
import { Input } from '../../Form/Field';

export default class ProfileForm extends Form {
  protected async submitForm(): Promise<boolean> {
    return true;
  }

  // TODO: add photo upload functional
  protected renderFields(): React.ReactNode {
    return (
      <div>
        <span className={styles.smallBlockTitle}>Profile information</span>

        <Input id="firstName" placeholder="First name" />
        <Input id="lastName" placeholder="Last name" />
        <Input id="taxId" placeholder="tax ID" />

        <span className={styles.smallBlockTitle}>Destination information</span>

        <Input id="country" placeholder="Country" />
        <Input id="state" placeholder="State" />
        <Input id="city" placeholder="City" />
        <Input id="address" placeholder="Address" />
      </div>
    );
  }
}
