import { connect } from 'react-redux';

import TransactionHistory from '../../components/TransactionHistory';
import { RootState } from '../../reducers';
import { TransactionList } from '../../components/TransactionHistory/Transaction';
import {
  setTransactionFilter,
  TransactionHistoryAction,
  TransactionHistoryFilters
} from '../../actions/transactionHistoryActions';
import { Dispatch } from 'redux';
import { CardSliderState } from '../../reducers/cardSliderReducer';
import { TransactionHistoryState } from '../../reducers/transactionReducer';

interface IGetVisibleTransactions {
  cards: CardSliderState;
  transactionHistory: TransactionHistoryState;
}

const getVisibleTransactions = ({
  cards: { currentCard },
  transactionHistory: { visibilityFilter, transactions }
}: IGetVisibleTransactions) => {
  switch (visibilityFilter.toUpperCase()) {
    case TransactionHistoryFilters.SEND:
      return transactions.filter(
        transaction => transaction.direction === 'out' && transaction.card_id === currentCard.id
      );
    case TransactionHistoryFilters.RECEIVE:
      return transactions.filter(
        transaction => transaction.direction === 'in' && transaction.card_id === currentCard.id
      );
    case TransactionHistoryFilters.WEEK:
      return transactions.filter(transaction => transaction.created_at);
    case TransactionHistoryFilters.MONTH:
      return transactions.filter(transaction => transaction.created_at);
    case TransactionHistoryFilters.YEAR:
      return transactions.filter(transaction => transaction.created_at);
    default:
      return transactions;
  }
};

const mapStateToProps = (state: RootState) => ({
  ...state,
  currentCard: state.cards.currentCard,
  transactions: getVisibleTransactions(state),
  visibilityFilter: state.transactionHistory.visibilityFilter
});

const mapDispatchToProps = (dispatch: Dispatch<TransactionHistoryAction>) => ({
  setTransactionFilter: (filter: string) => dispatch(setTransactionFilter(filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionHistory);
