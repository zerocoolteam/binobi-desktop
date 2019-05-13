import * as React from 'react';
import CardSlider from '../CardSlider';
import Balance from '../Balance';
import Tabs from '../Tabs';
import TransactionHistory from '../TransactionHistory';
import { CardItem } from '../Card';
import SearchForm from '../Common/SearchForm';

class Home extends React.Component<{}, { currentCard: CardItem }> {
  constructor(props: any) {
    super(props);

    this.state = {
      currentCard: {
        number: 1000,
        id: 1,
        classes: '',
        active: true,
        balance: 927.1,
        income_total: 22.4,
        spent_total: 1234.5,
        holder_name: 'Lindsey Johnson',
        expired_at: '08/21',
        cvv: 123
      } as CardItem
    };
  }

  holdCurrentCard = (currentCard: CardItem) => {
    this.setState({ currentCard: currentCard });
  }

  render() {
    const { currentCard } = this.state;
    // TODO: fix not change children components after change current state
    return (
      <div>
        <Balance total={this.state.currentCard.balance} title="Your balance" />
        <CardSlider
          infinite={true}
          onChangeCard={(current: CardItem) => this.holdCurrentCard(current)}
        />
        <Tabs middleElement={<SearchForm submitButtonText={'Search transaction'} />}>
          <TransactionHistory position="left" type="send" forCardId={this.state.currentCard.id} />
          <TransactionHistory
            position="right"
            type="receive"
            forCardId={this.state.currentCard.id}
          />
        </Tabs>
      </div>
    );
  }
}

export default Home;
