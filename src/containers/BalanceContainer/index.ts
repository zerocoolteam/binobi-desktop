import { connect } from 'react-redux';

import { RootState } from '../../reducers';
import Balance from '../../components/Balance';

const mapStateToProps = (state: RootState) => ({
  ...state,
  currentCard: state.cards.currentCard
});

export default connect(mapStateToProps)(Balance);
