import * as React from 'react';
import classNames from 'classnames';
import { Row, Col } from 'react-bootstrap';
import { More, Visa } from '../../../docs/img';

import * as styles from './style.css';
import * as cardStyles from './style.css';

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
            <div className={cardStyles.cardHolderName}>Lindsey Johnson</div>
          </div>
          <div>
            <div className={cardStyles.expires}>Expires</div>
            <div className={cardStyles.expiredDate}>08/21</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
