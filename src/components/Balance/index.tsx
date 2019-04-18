import * as React from 'react';

import * as styles from './style.css';

interface IState {
  total: number;
}

interface IProps {
  total: number;
}

class Balance extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      total: this.props.total
    };
  }

  render() {
    return (
      <div className={styles.balance}>
        <span className={styles.title}>Your balance</span>
        <br />
        <span className={styles.total}>$ {this.state.total}</span>
      </div>
    );
  }
}

export default Balance;
