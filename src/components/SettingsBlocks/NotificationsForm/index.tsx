import * as React from 'react';
import Form from '../../Form';
import * as styles from '../style.css';
import { BlockRadio, RadioButton, RadioButtonList } from '../../Form/Field';
import IconClock from '../../../helpers/IconClock';

export default class NotificationsForm extends Form {
  private readonly buttons: RadioButtonList<RadioButton> = [
    { id: 'half-an-hour', label: '30 minutes' },
    { id: 'hour', label: '1 hour' },
    { id: 'two-hour', label: '2 hour' },
    { id: 'four-hour', label: 'four-hour' },
    { id: 'eight-hour', label: '8 hour' },
    { id: 'custom', label: 'Custom' }
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
      <div className={styles.notificationContainer}>
        <span className={styles.smallBlockTitle}>Snooze notifications</span>

        {this.buttons.map(({ id, label }) => (
          <BlockRadio
            key={id}
            id={id}
            isChecked={this.compareRadioId(id)}
            value={0.5}
            onChange={this.handleChange}
            label={label}
            fieldStyle={styles.notificationBlock}
            selectIcon={(id: string, isActive: boolean) =>
              IconClock({ type: id, isActive: isActive })
            }
          />
        ))}
      </div>
    );
  }
}
