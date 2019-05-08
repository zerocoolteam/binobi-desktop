import * as React from 'react';
import Form from '../../Form';
import * as styles from '../style.css';
import { Input, SubmitButton } from '../../Form/Field';
import classNames from 'classnames';
import * as formStyles from '../../Form/style.css';

export default class PasswordForm extends Form {
  private readonly chartTypes: string[][] = [
    ['a', 'Lowercase'],
    ['A', 'Uppercase'],
    ['4', 'Number']
  ];

  protected async submitForm(): Promise<boolean> {
    return true;
  }

  private renderChartTypeBlock = (symbol: string, type: string) => {
    return (
      <div key={symbol} className={styles.passwordChartsTypeBlock}>
        <span>{symbol}</span>
        <span>{type}</span>
      </div>
    );
  }

  protected renderFields(): React.ReactNode {
    return (
      <div>
        <span className={styles.smallBlockTitle}>Change password</span>

        <Input id="previousPassword" placeholder="Previous password" />
        <Input id="newPassword" placeholder="New password" />
        <Input id="passwordConfirmation" placeholder="Confirm new password" />

        <div className={styles.passwordChartsTypeRow}>
          {this.chartTypes.map((symbolPair: string[]) =>
            this.renderChartTypeBlock(symbolPair[0], symbolPair[1])
          )}
        </div>
      </div>
    );
  }
}
