import * as React from 'react';
import ShowCardContainer from '../../../containers/ShowCardContainer';
import New from './New';
import { CardItem } from '../index';

import * as styles from './style.css';

interface CardInformationProps {
  currentCard: CardItem | undefined;
}

export default class CardInformation extends React.Component<CardInformationProps> {
  renderElement = () => {
    return this.props.currentCard ? <ShowCardContainer /> : <New />;
  }

  render(): React.ReactNode {
    return <div className={styles.information}>{this.renderElement()}</div>;
  }
}
