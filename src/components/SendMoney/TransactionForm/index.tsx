import * as React from 'react';
import Form from '../../Form';
import Input from '../../Form/Field/Input';
import * as styles from '../style.css';
import Horizon from '../../../services/networking/horizon';

export default class TransactionForm extends Form {
  private horizon: Horizon;
  constructor(props: any) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.horizon = new Horizon();
  }

  protected async submitForm(): Promise<boolean> {
    // let horizon = new Horizon;
    // horizon.createTestAccount();
    // horizon.balances();
    // horizon.buildTransaction('GDMG7MUHGVWCBYOFX6II4SVNAY5YLUWJQTG2AJO5QIPTVKI3GWYUJN43');
    // horizon.transactionList();
    this.horizon.payments();
    console.log(this.state);
    return true;
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    let newValues = { ...this.state.values, [event.target.id]: event.target.value };

    this.setState({ ...this.state, values: newValues });
  }

  protected renderFields(): React.ReactNode {
    let { values } = this.state;

    return (
      <div>
        <span className={styles.smallBlockTitle}>Transaction details</span>

        <Input
          id={'amount'}
          name={'amount'}
          label={'Amount'}
          value={values.amount}
          onChange={this.handleChange}
          startAdornment={'$'}
        />
        <Input
          id="description"
          name="description"
          label="Description"
          value={values.description}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
