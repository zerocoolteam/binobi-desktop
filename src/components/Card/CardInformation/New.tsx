import * as React from 'react';
import { ChangeEvent } from 'react';
import NewCardForm from '../../Form/NewCardForm';
import Input from '../../Form/Field/Input';
import { SubmitButton } from '../../Form/Field/SubmitButton';
const creditCardType = require('credit-card-type');
const getTypeInfo = require('credit-card-type').getTypeInfo;
const CardType = require('credit-card-type').types;

import * as styles from './style.css';
import * as formStyles from '../../Form/style.css';

class New extends React.Component {
  constructor(props: any) {
    super(props);
  }

  handleChangeCardNumber = (e: ChangeEvent<HTMLInputElement>) => {
    // let v = creditCardType(e.target.value)

    console.log(creditCardType(e.target.value));
    // .filter((card: any) => {
    //   console.log(card);
    //   return card.type === CardType.MASTERCARD || card.type === CardType.VISA;
    // });
  }

  render(): React.ReactNode {
    return (
      <div className={formStyles.formContainer}>
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
                fieldStyle={formStyles.input}
                onChange={(e: ChangeEvent<HTMLInputElement>) => this.handleChangeCardNumber(e)}
              />
              <Input id="cardHolder" placeholder="Card holder" />
              <Input id="expiredAT" placeholder="Exp. Date" />
              <Input id="cvv" placeholder="CVV" />
              <Input id="address" placeholder="Address" />
              <SubmitButton styles={formStyles.submitNewCard} text={'Add new card'} />
            </div>
          )}
        />
      </div>
    );
  }
}

export default New;
