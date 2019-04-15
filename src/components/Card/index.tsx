import * as React from 'react';
import classNames from 'classnames';
import * as styles from './style.css';
import * as cardStyles from './style.css';

const visa = require('../../../docs/img/cards/visa.svg');

export type CardItem = {
  id: number;
  number: number;
  classes: string;
  active: boolean;
  type?: string;
};

export type CardList = {
  [key: number]: CardItem;
  map(param: (card: CardItem, index?: number, array?: CardList) => any): any;
};

interface IState {
  id: number;
  number: number;
  classes: string;
  active: boolean;
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
        <span>****</span>
        <span>****</span>
        <span>****</span>
        <span>{this.state.number}</span>
      </div>
    );
  }

  renderCardType() {
    switch (this.state.type) {
      case 'visa':
        return <img src={visa} />;
      default:
        return <img src={visa} />;
    }
  }

  render() {
    return (
      <div className={this.getCardStyle()}>
        {this.renderCardType()}
        {this.renderCardNumber()}
        <div className={cardStyles.cardHolder}>Card holder</div>
        <div className={cardStyles.cardHolderName}>Lindsey Johnson</div>
        <div className={cardStyles.expires}>Expires</div>
        <div className={cardStyles.expiredDate}>08/21</div>
      </div>
    );
  }
}

export default Card;
