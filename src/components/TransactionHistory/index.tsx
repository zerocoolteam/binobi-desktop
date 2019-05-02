import * as React from 'react';
import SearchForm from './SearchForm';
import Transaction, { TransactionItem, TransactionList } from './Transaction';
import * as styles from './style.css';
import SearchInput from '../Form/Field/SearchInput';
import { SubmitSearchButton } from '../Form/Field/SubmitSearchButton';

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

// const receiveTransaction: ITransactionHistory = {
//   1556618411973: [
//     { id: 1, photo_url: '', full_name: 'Franz Ferdinand', amount: 12.00, currency: '$', created_at: 1556618411973 },
//     { id: 2, photo_url: '', full_name: 'John Doe', amount: 134.00, currency: '$', created_at: 1556618411973 },
//   ],
//   1556446116000: [
//     { id: 3, photo_url: '', full_name: 'Rebeca Moore', amount: 10.00, currency: '$', created_at: 1556446116000 },
//   ]
// }
//
// const sendTransaction: ITransactionHistory = {
//   1556618411973: [
//     {id: 4, photo_url: '', full_name: 'Rebeca Moore', amount: 972.00, currency: '$', created_at: 1556618411973 },
//   ],
//   1556446116000: [
//     {id: 5, photo_url: '', full_name: 'Franz Ferdinand', amount: 125.00, currency: '$', created_at: 1556446116000},
//     {id: 6, photo_url: '', full_name: 'John Doe', amount: 247.00, currency: '$', created_at: 1556446116000},
//     {id: 7, photo_url: '', full_name: 'John Doe', amount: 22.00, currency: '$', created_at: 1556446116000},
//   ]
// }

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

  render() {
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

        <span className={styles.generalDate}>Today</span>

        {this.state.transactions.map((transaction: TransactionItem) => (
          <Transaction key={transaction.id} {...transaction} />
        ))}
      </div>
    );
  }
}

export default TransactionHistory;
