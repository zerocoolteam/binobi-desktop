import * as React from 'react';
import Form from '../../Form';
import * as styles from '../style.css';
import { BlockRadio, RadioButton, RadioButtonList } from '../../Form/Field';
import { Handler } from '../../../helpers/Icon/IconHandler';

export default class LanguageForm extends Form {
  private readonly buttons: RadioButtonList<RadioButton> = [
    { id: 'USA', label: 'American English' },
    { id: 'UK', label: 'British English' },
    { id: 'FR', label: 'French' },
    { id: 'GR', label: 'Deutsch' },
    { id: 'SP', label: 'Spanish' },
    { id: 'CH', label: 'Chinese' },
    { id: 'JP', label: 'Japanese' },
    { id: 'BR', label: 'Brazilian' }
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
            checkedClass={styles.languageChecked}
            iconHandler={(id: string, isActive: boolean) =>
              (this.state.iconHandler as Handler).handle({
                type: 'language',
                isActive: isActive,
                value: id
              })
            }
          />
        ))}
      </div>
    );
  }
}
