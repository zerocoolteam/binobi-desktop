import * as React from 'react';
import classNames from 'classnames';
import { More, Visa } from '../../assets/img';

import * as styles from './style.css';
import * as cardStyles from './style.css';

export type CardItem = {
  id: number;
  number: number;
  classes: string;
  active: boolean;
  balance: number;
  income_total: number;
  spent_total: number;
  holder_name: string;
  expired_at: string;
  cvv: number;
  type?: string;
};

export type CardList = {
  length: number;
  [key: number]: CardItem;
  map(param: (card: CardItem, index?: number, array?: CardList) => any): CardList;
};

interface IState {
  id: number;
  number: number;
  classes: string;
  active: boolean;
  balance: number;
  holder_name: string;
  expired_at: string;
  type?: string;
}

interface IProps {
  data: CardItem;
  active: boolean;
}

class Card extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);

    this.state = this.props.data;
  }

  getCardStyle(): string {
    return classNames(
      cardStyles.card,
      this.state.classes,
      cardStyles.background,
      { [`${styles.cardActive}`]: this.props.active },
      { [`${styles.cardSecond}`]: !this.props.active }
    );
  }

  renderCardNumber() {
    return (
      <div className={cardStyles.cardNumber}>
        <div>****</div>
        <div>****</div>
        <div>****</div>
        <div>{this.state.number}</div>
      </div>
    );
  }

  renderCardType() {
    switch (this.state.type) {
      case 'visa':
        return <img src={Visa} />;
      default:
        return <img src={Visa} />;
    }
  }

  // onClick={(e: any) => this.state.onClick && this.state.onClick(e)}
  render() {
    return (
      <div className={this.getCardStyle()}>
        <div className={cardStyles.typeAndMore}>
          {this.renderCardType()}
          <img src={More} />
        </div>
        {this.renderCardNumber()}
        {/*<div className={cardStyles.wave}/>*/}
        <div className={cardStyles.bottomPlace}>
          <div>
            <div className={cardStyles.cardHolder}>Card holder</div>
            <div className={cardStyles.cardHolderName}>{this.state.holder_name}</div>
          </div>
          <div>
            <div className={cardStyles.expires}>Expires</div>
            <div className={cardStyles.expiredDate}>{this.state.expired_at}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
