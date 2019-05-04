import * as React from 'react';
import Balance from '../Balance';
import CardSlider from '../CardSlider';
import { CardItem } from '../Card';
import CardInformation from '../Card/CardInformation';

class Wallet extends React.Component<{}, { currentCard: CardItem }> {
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
    this.state = { currentCard: currentCard };
    // this.setState({currentCard: currentCard})
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
        <CardInformation {...this.state.currentCard} />
      </div>
    );
  }
}

export default Wallet;
