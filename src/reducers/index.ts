import { Reducer, combineReducers } from 'redux';

import { cardSliderReducer, CardSliderState } from './cardSliderReducer';
import { TransactionHistoryState, transactionReducer } from './transactionReducer';

export interface RootState {
  cards: CardSliderState;
  transactionHistory: TransactionHistoryState;
}

export const rootReducer = combineReducers<RootState | undefined>({
  cards: cardSliderReducer,
  transactionHistory: transactionReducer
});
