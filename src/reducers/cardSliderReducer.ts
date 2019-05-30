import { Reducer } from 'redux';

import { CardItem, CardList } from '../components/Card';
import { ChangeCurrentCardAction, CHANGE_CURRENT_CARD } from '../actions/commonActions';

export interface CardSliderState {
  readonly currentCard: CardItem;
  readonly cardList: CardList;
}

const cardsList: CardList = [
  {
    number: 1000,
    id: 1,
    classes: '',
    active: true,
    balance: 927.1,
    income_total: 66.4,
    spent_total: 1234.5,
    holder_name: 'Lindsey Johnson',
    expired_at: '05/22',
    cvv: 677
  },
  {
    number: 2000,
    id: 2,
    classes: '',
    active: false,
    balance: 213.4,
    income_total: 22.4,
    spent_total: 1234.5,
    holder_name: 'Lindsey Johnson',
    expired_at: '08/21',
    cvv: 123
  },
  {
    number: 3000,
    id: 3,
    classes: '',
    active: false,
    balance: 0,
    income_total: 22.4,
    spent_total: 1234.5,
    holder_name: 'Lindsey Johnson',
    expired_at: '08/21',
    cvv: 123
  },
  {
    number: 4000,
    id: 4,
    classes: '',
    active: false,
    balance: 10003,
    income_total: 555.4,
    spent_total: 1.5,
    holder_name: 'Lindsey Johnson',
    expired_at: '01/82',
    cvv: 875
  },
  {
    number: 5000,
    id: 5,
    classes: '',
    active: false,
    balance: 9207.1,
    income_total: 22.4,
    spent_total: 34.5,
    holder_name: 'Lindsey Johnson',
    expired_at: '11/19',
    cvv: 999
  },
  {
    number: 6000,
    id: 6,
    classes: '',
    active: false,
    balance: 23.5,
    income_total: 252.4,
    spent_total: 14.5,
    holder_name: 'Lindsey Johnson',
    expired_at: '08/22',
    cvv: 123
  }
];

const defaultState: CardSliderState = {
  currentCard: {
    number: 1000,
    id: 1,
    classes: '',
    active: true,
    balance: 927.1,
    income_total: 22.4,
    spent_total: 1234.5,
    holder_name: 'Lindsey Johnson',
    expired_at: '08/21',
    cvv: 123
  } as CardItem,
  cardList: cardsList
};

export const cardSliderReducer: Reducer<CardSliderState, ChangeCurrentCardAction> = (
  state = defaultState,
  action: ChangeCurrentCardAction
) => {
  switch (action.type) {
    case CHANGE_CURRENT_CARD:
      return {
        ...state,
        currentCard: action.currentCard
      };
    default:
      console.log(action);
      return state;
  }
};
