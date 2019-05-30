import * as React from 'react';
import * as styles from './style.css';
import { CardItem } from '../Card';

interface IBalance {
  currentCard: CardItem;
  title: string;
}

const Balance = ({ currentCard, title }: IBalance) => {
  return (
    <div className={styles.balance}>
      <span className={styles.title}>{title}</span>
      <br />
      <span className={styles.total}>{currentCard && `$ ${currentCard.balance}`}</span>
    </div>
  );
};

export default Balance;
