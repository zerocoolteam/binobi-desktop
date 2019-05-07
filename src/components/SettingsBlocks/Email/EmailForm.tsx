import * as React from 'react';
import Form from '../../Form';
import * as styles from '../style.css';
import { Input, SubmitButton } from '../../Form/Field';
import classNames from 'classnames';
import * as formStyles from '../../Form/style.css';

export default class EmailForm extends Form {
  protected async submitForm(): Promise<boolean> {
    return true;
  }

  protected renderFields(): React.ReactNode {
    return (
      <div>
        <span className={styles.smallBlockTitle}>Change email</span>

        <Input id="email" placeholder="Email" />
        <Input id="newEmail" placeholder="New email" />
        <Input id="emailConfirmation" placeholder="Confirm new email" />

        <SubmitButton
          styles={classNames(formStyles.submitFormButton, formStyles.largeMarginTop)}
          text={'Change email'}
        />
      </div>
    );
  }
}
