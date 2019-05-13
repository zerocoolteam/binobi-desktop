import * as React from 'react';
import * as moment from 'moment';

import * as styles from './style.css';
import classNames from 'classnames';

export type TransactionItem = {
  id: number;
  photo_url: string;
  full_name: string;
  amount: number;
  currency: string;
  created_at: number;
  direction: 'in' | 'out';
  card_id: number;
};

export type TransactionList = {
  [key: number]: TransactionItem;
  map(
    param: (transaction: TransactionItem, index?: number, array?: TransactionList) => any
  ): TransactionList;
};

interface IProps extends TransactionItem {}
interface IState extends TransactionItem {}

class Transaction extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      id: this.props.id,
      photo_url: this.props.photo_url,
      full_name: this.props.full_name,
      amount: this.props.amount,
      currency: this.props.currency,
      created_at: this.props.created_at,
      direction: this.props.direction,
      card_id: this.props.card_id
    };
  }

  parseCreatedAt = () => {
    return moment(this.state.created_at).format('DD MMMM, YYYY');
  }

  render() {
    return (
      <div className={styles.transactionBlock}>
        <div className={styles.leftColumn}>
          <div className={styles.photo}>
            <img src="https://i.stack.imgur.com/34AD2.jpg" alt="photo_url" />
          </div>
          <div className={styles.nameAndDate}>
            <div className={styles.name}>
              {this.state.direction === 'out' && <span>to </span>}
              <span>{this.state.full_name}</span>
            </div>
            <div className={styles.date}>{this.parseCreatedAt()}</div>
          </div>
        </div>
        <div
          className={classNames(
            styles.amount,
            { [`${styles.inTr}`]: this.state.direction === 'in' },
            { [`${styles.out}`]: this.state.direction === 'out' }
          )}
        >
          {this.state.currency} {this.state.amount.toFixed(2)}
        </div>
      </div>
    );
  }
}

export default Transaction;
