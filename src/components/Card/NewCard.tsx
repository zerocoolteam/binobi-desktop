import * as React from 'react';
import classNames from 'classnames';
import { Add } from '../../../docs/img';

import * as styles from './style.css';

interface IProps {
  active: boolean;
}

const NewCard = ({ active }: IProps) => {
  const getCardStyle = (): string => {
    return classNames(
      styles.card,
      styles.newCard,
      { [`${styles.cardActive}`]: active },
      { [`${styles.cardSecond}`]: !active }
    );
  };

  return (
    <div className={getCardStyle()}>
      <img src={Add} />
      <span>Add new card</span>
    </div>
  );
};

export default NewCard;
