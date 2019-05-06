import * as React from 'react';
import NewCardForm from '../../Form/NewCardForm';
import * as styles from './style.css';
import Input from '../../Form/Field/Input';
import { SubmitButton } from '../../Form/Field/SubmitButton';

class New extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <div className={styles.formContainer}>
        <span className={styles.cardInfoTitle}>Card information</span>

        <NewCardForm
          url="http://localhost:3000"
          // formStyles={styles.newForm}
          render={() => (
            <div>
              <Input
                id="cardNumber"
                placeholder="Card number"
                label="Credit card number"
                fieldStyle={styles.input}
              />
              <Input id="cardHolder" placeholder="Card holder" fieldStyle={styles.input} />
              <Input id="expiredAT" placeholder="Exp. Date" fieldStyle={styles.input} />
              <Input id="cvv" placeholder="CVV" fieldStyle={styles.input} />
              <Input id="address" placeholder="Address" fieldStyle={styles.input} />
              <SubmitButton styles={styles.submitNewCard} text={'Add new card'} />
            </div>
          )}
        />
      </div>
    );
  }
}

export default New;
