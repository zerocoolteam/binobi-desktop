import * as React from 'react';
import { CardItem } from '../index';
import * as styles from './style.css';
import classNames = require('classnames');

interface IProps extends CardItem {}

interface IState {
  id: number;
  balance: number;
  income_total: number;
  spent_total: number;
  holder_name: string;
  expired_at: string;
  cvv: number;
}

class Show extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      id: this.props.id,
      balance: this.props.balance,
      income_total: this.props.income_total,
      spent_total: this.props.spent_total,
      holder_name: this.props.holder_name,
      expired_at: this.props.expired_at,
      cvv: this.props.cvv
    };
  }

  renderAmount = (type: string) => {
    let amountClass: string = styles.income;
    let title: string = 'Income';
    let amount: number = this.state.income_total || 1450.0;

    if (type === 'out') {
      amountClass = styles.out;
      title = 'Spent';
      amount = this.state.spent_total || 1230.0;
    }

    return (
      <div className={classNames(styles.amountBlock, amountClass)}>
        <span className={styles.title}>{title}</span>
        <span className={styles.amount}>$ {amount.toFixed(2)}</span>
        <div className={styles.meter}>
          <span style={{ width: `${75}%` }} />
        </div>
      </div>
    );
  }

  renderCardInfo = () => {
    return (
      <div className={styles.cardInfoRow}>
        <div>
          <span>Balance</span>
          <span>{this.state.balance}</span>
        </div>
        <div>
          <span>Card Holder</span>
          <span>{this.state.holder_name}</span>
        </div>
        <div>
          <span>Exp. Date</span>
          <span>{this.state.expired_at}</span>
        </div>
        <div>
          <span>CVV</span>
          <span>{this.state.cvv}</span>
        </div>
      </div>
    );
  }

  render(): React.ReactNode {
    return (
      <div>
        <div className={styles.amountBlockRow}>
          {this.renderAmount('in')}
          {this.renderAmount('out')}
        </div>

        <span className={styles.cardInfoTitle}>Card information</span>

        {this.renderCardInfo()}
      </div>
    );
  }
}

export default Show;
