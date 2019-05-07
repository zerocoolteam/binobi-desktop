import * as React from 'react';
import Form from '../../Form';
import * as styles from '../style.css';
import { Input, SubmitButton } from '../../Form/Field';
import * as formStyles from '../../Form/style.css';
import classNames from 'classnames';

export default class PhoneForm extends Form {
  protected async submitForm(): Promise<boolean> {
    return true;
  }

  protected renderFields(): React.ReactNode {
    return (
      <div>
        <span className={styles.smallBlockTitle}>Change phone number</span>

        <Input id="phone" placeholder="Phone number" />
        <Input id="newPhone" placeholder="New phone number" />
        <Input id="phoneConfirmation" placeholder="Confirm new phone number" />

        <SubmitButton
          styles={classNames(formStyles.submitFormButton, formStyles.largeMarginTop)}
          text={'Change phone number'}
        />
      </div>
    );
  }
}
