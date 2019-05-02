import * as React from 'react';
import SearchForm from './SearchForm';
import Transaction, { TransactionItem, TransactionList } from './Transaction';
import * as styles from './style.css';
import SearchInput from '../Form/Field/SearchInput';
import { SubmitSearchButton } from '../Form/Field/SubmitSearchButton';
import moment = require('moment');

// interface ITransactionHistory {
//   [key: number]: TransactionList;
// }

type TransactionHistoryType = {
  type: string;
  position?: string;
};

interface IProps extends TransactionHistoryType {}
interface IState extends IProps {
  transactions: TransactionList;
}

const receiveTransaction: TransactionList = [
  {
    id: 1,
    photo_url: '',
    full_name: 'Franz Ferdinand',
    amount: 12.0,
    currency: '$',
    created_at: 1556618411973,
    direction: 'in'
  },
  {
    id: 2,
    photo_url: '',
    full_name: 'John Doe',
    amount: 134.0,
    currency: '$',
    created_at: 1556618411973,
    direction: 'in'
  },
  {
    id: 3,
    photo_url: '',
    full_name: 'Rebeca Moore',
    amount: 10.0,
    currency: '$',
    created_at: 1556446116000,
    direction: 'in'
  }
];

const sendTransaction: TransactionList = [
  {
    id: 4,
    photo_url: '',
    full_name: 'Rebeca Moore',
    amount: 972.01,
    currency: '$',
    created_at: 1556618411973,
    direction: 'out'
  },
  {
    id: 5,
    photo_url: '',
    full_name: 'Franz Ferdinand',
    amount: 125.00234255,
    currency: '$',
    created_at: 1556446116000,
    direction: 'out'
  },
  {
    id: 6,
    photo_url: '',
    full_name: 'John Doe',
    amount: 247.0,
    currency: '$',
    created_at: 1556446116000,
    direction: 'out'
  },
  {
    id: 7,
    photo_url: '',
    full_name: 'John Doe',
    amount: 22.0,
    currency: '$',
    created_at: 1556446116000,
    direction: 'out'
  }
];

class TransactionHistory extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      type: this.props.type,
      transactions: this.props.type === 'receive' ? receiveTransaction : sendTransaction
    };
  }

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

    return (
      <div className={styles.transactionHistoryContainer}>
        <SearchForm
          submitButton={false}
          url="http://localhost:3000"
          formStyles={styles.form}
          render={() => (
            <div className={styles.searchForm}>
              <SubmitSearchButton />
              <SearchInput
                id="search"
                placeholder="Search transaction"
                fieldStyle={styles.searchInput}
              />
            </div>
          )}
        />

        {this.state.transactions.map((transaction: TransactionItem) => {
          let elements = this.renderTransaction(transaction, lastCreatedAt);
          lastCreatedAt = transaction.created_at;

          return elements;
        })}
      </div>
    );
  }
}

export default TransactionHistory;
