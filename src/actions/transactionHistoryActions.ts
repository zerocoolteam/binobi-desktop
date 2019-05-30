import { Action, ActionCreator } from 'redux';

export const TransactionHistoryFilters = {
  SEND: 'SEND',
  RECEIVE: 'RECEIVE',
  WEEK: 'WEEK',
  MONTH: 'MONTH',
  YEAR: 'YEAR'
};

export const SET_TRANSACTION_HISTORY_FILTER = 'SET_TRANSACTION_HISTORY_FILTER';

export interface SetTransactionFilterAction extends Action<'SET_TRANSACTION_HISTORY_FILTER'> {
  filter: string;
}

export const setTransactionFilter: ActionCreator<SetTransactionFilterAction> = filter => ({
  type: SET_TRANSACTION_HISTORY_FILTER,
  filter: filter
});

export type TransactionHistoryAction = SetTransactionFilterAction;
