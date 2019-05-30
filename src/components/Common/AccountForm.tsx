import * as React from 'react';
import Form, { SubmitButton } from '../Form';
import * as styles from './style.css';
import { Toggle } from '../Form/Field/Toggle';

export default class AccountForm extends Form {
  private readonly fields = [
    { id: 'face-id', label: 'Use Face ID' },
    { id: 'statistics', label: 'Send Statistics' },
    { id: 'contracts', label: 'Allow Contracts' },
    { id: 'ipsum', label: 'Lorem Ipsum' }
  ];

  constructor(props: any) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  protected async submitForm(): Promise<boolean> {
    return true;
  }

  private readonly handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ ...this.state, [e.target.name]: e.target.checked });
  }

  protected renderFields(): React.ReactNode {
    return (
      <div className={styles.formContainer}>
        <span className={styles.smallBlockTitle}>Permissions</span>

        <div className={styles.accountContainer}>
          {this.fields.map(({ id, label }) => (
            <div key={id} className={styles.accountRow}>
              <span>{label}</span>
              <Toggle name={id} id={id} isChecked={this.state[id]} onChange={this.handleChange} />
            </div>
          ))}
        </div>

        <span className={styles.smallBlockTitle}>Manage Account</span>

        <SubmitButton styles={styles.submitFormButton} text={'Log out'} />
        <SubmitButton styles={styles.submitFormButton} text={'Close account'} />
      </div>
    );
  }
}
