import * as React from 'react';
import { CardItem } from '../index';
import classNames from 'classnames';
import * as styles from './style.css';

interface ShowCardProps {
  currentCard: CardItem;
}

class Show extends React.Component<ShowCardProps> {
  renderAmount = (type: string) => {
    const {
      currentCard: { income_total, spent_total }
    } = this.props;

    let amountClass: string = styles.income;
    let title: string = 'Income';
    let amount: number = income_total || 1450.0;

    if (type === 'out') {
      amountClass = styles.out;
      title = 'Spent';
      amount = spent_total || 1230.0;
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
    const {
      currentCard: { balance, holder_name, expired_at, cvv }
    } = this.props;

    return (
      <div className={styles.cardInfoRow}>
        <div>
          <span>Balance</span>
          <span>{balance}</span>
        </div>
        <div>
          <span>Card Holder</span>
          <span>{holder_name}</span>
        </div>
        <div>
          <span>Exp. Date</span>
          <span>{expired_at}</span>
        </div>
        <div>
          <span>CVV</span>
          <span>{cvv}</span>
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
