import { connect } from 'react-redux';

import { RootState } from '../../reducers';
import Show from '../../components/Card/CardInformation/Show';
import { CardItem } from '../../components/Card';

const mapStateToProps = (state: RootState) => ({
  ...state,
  currentCard: state.cards.currentCard as CardItem
});

export default connect(mapStateToProps)(Show);
