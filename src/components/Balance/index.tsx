import * as React from 'react';
import * as styles from './style.css';

interface IBalance {
  total: number;
  title: string;
}

const Balance = ({ total, title }: IBalance) => {
  return (
    <div className={styles.balance}>
      <span className={styles.title}>{title}</span>
      <br />
      <span className={styles.total}>$ {total}</span>
    </div>
  );
};

export default Balance;
