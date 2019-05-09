import * as React from 'react';
import Form from '../../Form';
import * as styles from '../style.css';
import { BlockRadio, RadioButton, RadioButtonList } from '../../Form/Field';
import { Handler } from '../../../helpers/Icon/IconHandler';

export default class CurrencyForm extends Form {
  private readonly buttons: RadioButtonList<RadioButton> = [
    { id: 'USD', label: 'United States Dollar' },
    { id: 'EU', label: 'Euro' },
    { id: 'PS', label: 'Pound Sterling' },
    { id: 'BR', label: 'Brazilian Real' },
    { id: 'AD', label: 'Australian Dollar' },
    { id: 'CD', label: 'Canadian Dollar' },
    { id: 'JY', label: 'Japanese Yen' },
    { id: 'CY', label: 'Chinese Yuan' }
  ];

  constructor(props: any) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  protected async submitForm(): Promise<boolean> {
    return true;
  }

  private readonly handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ checkedRadioId: e.target.id });
  }

  private compareRadioId = (id: string) => {
    return this.state.checkedRadioId === id;
  }

  protected renderFields(): React.ReactNode {
    return (
      <div className={styles.formContainer}>
        {this.buttons.map(({ id, label }) => (
          <BlockRadio
            key={id}
            id={id}
            isChecked={this.compareRadioId(id)}
            value={0.5}
            onChange={this.handleChange}
            label={label}
            fieldStyle={styles.notificationBlock}
            checkedClass={styles.checked}
            iconHandler={(id: string, isActive: boolean) =>
              (this.state.iconHandler as Handler).handle({type: 'currency', isActive: isActive, value: id})
            }
          />
        ))}
      </div>
    );
  }
}
