import * as React from 'react';
import Show from './Show';
import New from './New';
import { CardItem } from '../index';
import * as styles from './style.css';

interface ICardInformation {
  card: CardItem | undefined;
}

class CardInformation extends React.Component<ICardInformation, ICardInformation> {
  constructor(props: any) {
    super(props);

    this.state = {
      card: this.props.card
    };
  }

  renderElement = () => {
    return this.state.card ? <Show {...this.state.card} /> : <New />;
  }

  render(): React.ReactNode {
    return <div className={styles.information}>{this.renderElement()}</div>;
  }
}

export default CardInformation;
