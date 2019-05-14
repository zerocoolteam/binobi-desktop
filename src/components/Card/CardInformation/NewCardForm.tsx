import * as React from 'react';
import Form from '../../Form';
import { SubmitButton } from '../../Form/Field';
import * as formStyles from '../../Form/style.css';
import { ChangeEvent } from 'react';
import Input from '../../Form/Field/Input';

const creditCardType = require('credit-card-type');
const getTypeInfo = require('credit-card-type').getTypeInfo;
const CardType = require('credit-card-type').types;

export default class NewCardForm extends Form {
  protected async submitForm(): Promise<boolean> {
    return true;
  }

  handleChangeCardNumber = (e: ChangeEvent<HTMLInputElement>) => {
    // let v = creditCardType(e.target.value)

    console.log(creditCardType(e.target.value));
    // .filter((card: any) => {
    //   console.log(card);
    //   return card.type === CardType.MASTERCARD || card.type === CardType.VISA;
    // });
  }

  protected renderFields(): React.ReactNode {
    return (
      <div>
        <Input
          id="cardNumber"
          placeholder="Card number"
          label="Credit card number"
          onChange={(e: ChangeEvent<HTMLInputElement>) => this.handleChangeCardNumber(e)}
        />
        <Input id="cardHolder" placeholder="Card holder" />
        <Input id="expiredAT" placeholder="Exp. Date" />
        <Input id="cvv" placeholder="CVV" />
        <Input id="address" placeholder="Address" />
        <SubmitButton styles={formStyles.submitFormButton} text={'Add new card'} />
      </div>
    );
  }
}
