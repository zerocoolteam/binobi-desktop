import * as React from 'react';
import Transaction, { TransactionItem, TransactionList } from './Transaction';
import * as styles from './style.css';
import moment = require('moment');
import { CardItem } from '../Card';
import { TransactionHistoryState } from '../../reducers/transactionReducer';

type TransactionHistoryType = {
  type: string;
};

interface TransactionHistoryProps extends TransactionHistoryType {
  currentCard: CardItem;
  setTransactionFilter(filter: string): void;
}

class TransactionHistory extends React.Component<
  TransactionHistoryProps & TransactionHistoryState
> {
  constructor(props: TransactionHistoryProps & TransactionHistoryState) {
    super(props);

    const { type, setTransactionFilter } = this.props;
    setTransactionFilter(type);
  }

  // TODO: change transaction created at view
  private parseCreatedAt = (createdAt: number) => {
    // moment().calendar(null, {
    //   sameDay: '[Today]',
    //   nextDay: '[Tomorrow]',
    //   nextWeek: 'dddd',
    //   lastDay: '[Yesterday]',
    //   lastWeek: '[Last] dddd',
    //   sameElse: 'DD MMMM, YYYY'
    // });
    return moment(createdAt).format('DD MMMM, YYYY');
  }

  private renderTransaction = (transaction: TransactionItem, lastCreatedAt: number) => {
    let collectionElem = [<Transaction key={transaction.id} {...transaction} />];
    if (transaction.created_at !== lastCreatedAt) {
      collectionElem.unshift(
        <span key={transaction.created_at} className={styles.generalDate}>
          {this.parseCreatedAt(transaction.created_at)}
        </span>
      );
    }

    return collectionElem;
  }

  render() {
    let lastCreatedAt: number;
    const { transactions } = this.props;

    return (
      <div className={styles.transactionHistoryContainer}>
        {transactions.map((transaction: TransactionItem) => {
          let elements = this.renderTransaction(transaction, lastCreatedAt);
          lastCreatedAt = transaction.created_at;

          return elements;
        })}
      </div>
    );
  }
}

export default TransactionHistory;
