import * as React from 'react';
import BalanceContainer from '../../containers/BalanceContainer';
import CardSliderContainer from '../../containers/CardSliderContainer';
import { CardItem } from '../Card';
import CardInformationContainer from '../../containers/CardInformationContainer';

interface WalletProps {
  changeCurrentCard(currentCard: CardItem | undefined): void;
}

class Wallet extends React.Component<WalletProps> {
  render() {
    return (
      <div>
        <BalanceContainer title="My wallet’s total balance" />
        <CardSliderContainer infinite={false} needNewCard={true} />
        <CardInformationContainer />
      </div>
    );
  }
}

export default Wallet;
