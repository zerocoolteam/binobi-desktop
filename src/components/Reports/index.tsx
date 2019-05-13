import * as React from 'react';
import Tabs from '../Tabs';
import TransactionHistory from '../TransactionHistory';
import Column from '../Charts/Column';
import Donut from '../Charts/Donut';

import * as styles from './style.css';

class Reports extends React.Component {
  middleElement() {
    return (
      <div>
        <Column />
        <Donut />
      </div>
    );
  }

  render() {
    return (
      <div>
        <h1 className={styles.title}>Reports</h1>

        <Tabs middleElement={this.middleElement()}>
          <TransactionHistory position="left" type="week" />
          <TransactionHistory position="center" type="month" />
          <TransactionHistory position="right" type="year" />
        </Tabs>
      </div>
    );
  }
}

export default Reports;
