import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { RootState } from '../../reducers';
import { CommonAction, changeCurrentCard } from '../../actions/commonActions';
import { CardItem } from '../../components/Card';
import CardSlider from '../../components/CardSlider';

const mapStateToProps = (state: RootState) => ({
  ...state,
  currentCard: state.cards.currentCard,
  cardList: state.cards.cardList
});

const mapDispatchToProps = (dispatch: Dispatch<CommonAction>) => ({
  changeCurrentCard: (currentCard: CardItem) => dispatch(changeCurrentCard(currentCard))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardSlider);
