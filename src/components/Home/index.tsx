import * as React from 'react';
import CardSlider from '../CardSlider';
import Balance from '../Balance';
import Tabs from '../Tabs';
import TransactionHistory from '../TransactionHistory';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Balance total={927.01} />
        <CardSlider />
        <Tabs>
          <TransactionHistory position="left" type="send" />
          <TransactionHistory position="right" type="receive" />
        </Tabs>
      </div>
    );
  }
}

export default Home;
