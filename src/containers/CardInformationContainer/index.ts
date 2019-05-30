import { connect } from 'react-redux';

import CardInformation from '../../components/Card/CardInformation';
import { RootState } from '../../reducers';

const mapStateToProps = (state: RootState) => ({
  ...state,
  currentCard: state.cards.currentCard
});

export default connect(mapStateToProps)(CardInformation);
