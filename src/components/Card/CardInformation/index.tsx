import * as React from 'react';
import Show from './Show';
import { CardItem } from '../index';
import * as styles from './style.css';

interface IProps extends CardItem {}

class CardInformation extends React.Component<IProps> {
  render(): React.ReactNode {
    return (
      <div className={styles.information}>
        <Show {...this.props} />
      </div>
    );
  }
}

export default CardInformation;
