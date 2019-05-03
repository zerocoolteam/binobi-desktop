import * as React from 'react';
import Balance from '../Balance';
import CardSlider from '../CardSlider';
import { CardItem } from '../Card';
import CardInformation from '../Card/CardInformation';

class Wallet extends React.Component<{}, { currentCard: CardItem }> {
  constructor(props: any) {
    super(props);
    this.state = {
      currentCard: {} as CardItem
    };
  }

  holdCurrentCard = (currentCard: CardItem) => {
    this.state = { currentCard: currentCard };
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <Balance total={this.state.currentCard.balance} title="My wallet’s total balance" />
        <CardSlider
          infinite={false}
          onChangeCard={(currentCard: CardItem) => this.holdCurrentCard(currentCard)}
        />
        <CardInformation card={this.state.currentCard} />
      </div>
    );
  }
}

export default Wallet;
