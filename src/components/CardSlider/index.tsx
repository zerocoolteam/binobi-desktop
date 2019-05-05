import * as React from 'react';
import Card, { CardItem, CardList } from '../Card';
import NewCard from '../Card/NewCard';

import Carousel from 'nuka-carousel';

interface IProps {
  infinite: boolean;
  needNewCard?: boolean;

  onChangeCard(currentCard: CardItem): void;
}

interface TemplateState {
  activeIndex: number;
  activeCardId: number | string;
  cards: CardList;
  infinite: boolean;
  needNewCard?: boolean;

  onChangeCard(currentCard: CardItem | undefined): void;
}

const cardsList: CardList = [
  {
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
  },
  {
    number: 2000,
    id: 2,
    classes: '',
    active: false,
    balance: 213.4,
    income_total: 22.4,
    spent_total: 1234.5,
    holder_name: 'Lindsey Johnson',
    expired_at: '08/21',
    cvv: 123
  },
  {
    number: 3000,
    id: 3,
    classes: '',
    active: false,
    balance: 0,
    income_total: 22.4,
    spent_total: 1234.5,
    holder_name: 'Lindsey Johnson',
    expired_at: '08/21',
    cvv: 123
  },
  {
    number: 4000,
    id: 4,
    classes: '',
    active: false,
    balance: 10003,
    income_total: 22.4,
    spent_total: 1234.5,
    holder_name: 'Lindsey Johnson',
    expired_at: '08/21',
    cvv: 123
  },
  {
    number: 5000,
    id: 5,
    classes: '',
    active: false,
    balance: 9207.1,
    income_total: 22.4,
    spent_total: 1234.5,
    holder_name: 'Lindsey Johnson',
    expired_at: '08/21',
    cvv: 123
  },
  {
    number: 6000,
    id: 6,
    classes: '',
    active: false,
    balance: 23.5,
    income_total: 22.4,
    spent_total: 1234.5,
    holder_name: 'Lindsey Johnson',
    expired_at: '08/21',
    cvv: 123
  }
];

class CardSlider extends React.Component<IProps, TemplateState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      activeIndex: 0,
      activeCardId: cardsList[0].id,
      cards: cardsList,
      onChangeCard: this.props.onChangeCard,
      infinite: this.props.infinite,
      needNewCard: this.props.needNewCard || false
    };

    this.state.onChangeCard(cardsList[0]);
  }

  private handleSelect(_current: number, next: number): void {
    const { cards, onChangeCard } = this.state;
    let card: CardItem = cards[next];
    let id;

    card ? (id = card.id) : (id = 'newCard');

    onChangeCard(card);

    this.setState({ activeIndex: next, activeCardId: id });
  }

  // private handleClick(index: number, card: CardItem) {
  //   this.setState({activeIndex: index as number, activeCardId: card.id});
  // }

  private calcSlidesToShowCount = (): number => {
    return Math.floor((window.innerWidth - 110) / 250);
  }

  private calcPaddingBetweenSlides = (): number => {
    return this.calcSlidesToShowCount() <= 3 ? 60 : 0;
  }

  render() {
    return (
      <Carousel
        slideIndex={this.state.activeIndex}
        speed={1000}
        transitionMode={'scroll'}
        slidesToShow={3}
        // cellSpacing={20}
        wrapAround={true}
        dragging
        swiping
        cellAlign={'center'}
        enableKeyboardControls={true}
        autoplay
        autoplayInterval={2000}
        pauseOnHover
        withoutControls
        beforeSlide={(current: number, next: number) => {
          this.handleSelect(current, next);
        }}
      >
        {this.state.cards.map((card: CardItem) => (
          <Card
            key={card.id}
            active={this.state.activeCardId === card.id}
            // onClick={(e: any) => this.handleClick(index as number, card)}
            data={card}
          />
        ))}
        {this.state.needNewCard && (
          <NewCard key={'newCard'} active={this.state.activeCardId === 'newCard'} />
        )}
      </Carousel>
    );
  }
}

export default CardSlider;
