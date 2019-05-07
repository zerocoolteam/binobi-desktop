import * as React from 'react';
import { ChangeEvent } from 'react';
import NewCardForm from './NewCardForm';

import * as styles from './style.css';

class New extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <div>
        <span className={styles.cardInfoTitle}>Card information</span>

        <NewCardForm />
      </div>
    );
  }
}

export default New;
