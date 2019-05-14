import * as React from 'react';
import Tabs from '../Tabs';
import TransactionHistory from '../TransactionHistory';
import Column from '../Charts/Column';
import Donut from '../Charts/Donut';

import * as styles from './style.css';

class Reports extends React.Component {
  renderBadge = () => {
    return <p className={styles.badge}>Sent</p>;
  }

  middleElement() {
    return (
      <div className={styles.chartsContainer}>
        <Column />
        <Donut />
        {this.renderBadge()}
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
