import * as React from 'react';
import Show from './Show';
import { CardItem } from '../index';
import * as styles from './style.css';

class CardInformation extends React.Component<{ card: CardItem }> {
  render(): React.ReactNode {
    return (
      <div className={styles.information}>
        <Show {...this.props.card} />
      </div>
    );
  }
}

export default CardInformation;
