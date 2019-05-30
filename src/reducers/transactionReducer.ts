import { Reducer } from 'redux';

import { TransactionList } from '../components/TransactionHistory/Transaction';
import {
  SET_TRANSACTION_HISTORY_FILTER,
  TransactionHistoryAction,
  TransactionHistoryFilters
} from '../actions/transactionHistoryActions';

const transactions: TransactionList = [
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
    id: 8,
    photo_url: '',
    full_name: 'John Doe',
    amount: 134.0,
    currency: '$',
    created_at: 1556622411973,
    direction: 'in',
    card_id: 2
  },
  {
    id: 9,
    photo_url: '',
    full_name: 'John Doe',
    amount: 132.0,
    currency: '$',
    created_at: 1556622411973,
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
  },
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

export interface TransactionHistoryState {
  readonly transactions: TransactionList;
  readonly visibilityFilter: string;
}

const defaultState: TransactionHistoryState = {
  transactions: transactions,
  visibilityFilter: TransactionHistoryFilters.SEND
};

export const transactionReducer: Reducer<TransactionHistoryState, TransactionHistoryAction> = (
  state = defaultState,
  action: TransactionHistoryAction
) => {
  switch (action.type) {
    case SET_TRANSACTION_HISTORY_FILTER:
      return {
        ...state,
        visibilityFilter: action.filter
      };
    default:
      console.log(action);
      return state;
  }
};
