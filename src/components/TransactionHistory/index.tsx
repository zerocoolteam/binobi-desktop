import * as React from 'react';
import SearchForm from '../Form/SearchForm';
import Transaction, { TransactionItem, TransactionList } from './Transaction';
import SearchInput from '../Form/Field/SearchInput';
import { SubmitSearchButton } from '../Form/Field/SubmitSearchButton';
import * as styles from './style.css';
import moment = require('moment');

type TransactionHistoryType = {
  type: string;
  forCardId: number;
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
    direction: 'in',
    card_id: 2
  },
  {
    id: 2,
    photo_url: '',
    full_name: 'John Doe',
    amount: 134.0,
    currency: '$',
    created_at: 1556618411973,
    direction: 'in',
    card_id: 2
  },
  {
    id: 3,
    photo_url: '',
    full_name: 'Rebeca Moore',
    amount: 10.0,
    currency: '$',
    created_at: 1556446116000,
    direction: 'in',
    card_id: 1
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
    direction: 'out',
    card_id: 3
  },
  {
    id: 5,
    photo_url: '',
    full_name: 'Franz Ferdinand',
    amount: 125.00234255,
    currency: '$',
    created_at: 1556446116000,
    direction: 'out',
    card_id: 2
  },
  {
    id: 6,
    photo_url: '',
    full_name: 'John Doe',
    amount: 247.0,
    currency: '$',
    created_at: 1556446116000,
    direction: 'out',
    card_id: 1
  },
  {
    id: 7,
    photo_url: '',
    full_name: 'John Doe',
    amount: 22.0,
    currency: '$',
    created_at: 1556446116000,
    direction: 'out',
    card_id: 1
  }
];

class TransactionHistory extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      type: this.props.type,
      forCardId: this.props.forCardId,
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
          // console.log(this.state.forCardId);
          if (transaction.card_id === this.state.forCardId) {
            let elements = this.renderTransaction(transaction, lastCreatedAt);
            lastCreatedAt = transaction.created_at;

            return elements;
          } else {
            return;
          }
        })}
      </div>
    );
  }
}

export default TransactionHistory;
