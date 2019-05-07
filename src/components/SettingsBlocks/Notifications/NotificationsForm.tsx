import * as React from 'react';
import Form from '../../Form';
import * as styles from '../style.css';
import { NotificationInput, SubmitButton } from '../../Form/Field';

export default class NotificationsForm extends Form {
  constructor(props: any) {
    super(props);

    // this.state = {
    //   ...this.state,
    //   submitButton: true,
    //   submitButtonText: 'Change email',
    // };
  }

  protected async submitForm(): Promise<boolean> {
    return true;
  }

  protected renderFields(): React.ReactNode {
    return (
      <div>
        <span className={styles.smallBlockTitle}>Change email</span>
        <NotificationInput
          id={'eee'}
          checked
          value={0.5}
          onChange={(e: any) => console.log(e.target.value)}
        />
        <NotificationInput
          id={'eee'}
          value={1}
          onChange={(e: any) => console.log(e.target.value)}
        />

        {/*<SubmitButton styles={classNames(formStyles.submitFormButton, formStyles.largeMarginTop)} text={'Change email'} />*/}
      </div>
    );
  }
}
