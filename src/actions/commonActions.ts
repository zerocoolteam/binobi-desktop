import { Action, ActionCreator } from 'redux';
import { CardItem } from '../components/Card';

export const CHANGE_CURRENT_CARD = 'CHANGE_CURRENT_CARD';

export interface ChangeCurrentCardAction extends Action<'CHANGE_CURRENT_CARD'> {
  currentCard: CardItem;
}

export const changeCurrentCard: ActionCreator<ChangeCurrentCardAction> = currentCard => ({
  type: CHANGE_CURRENT_CARD,
  currentCard: currentCard
});

export type CommonAction = ChangeCurrentCardAction;
