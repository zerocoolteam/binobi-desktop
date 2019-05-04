import * as React from 'react';
import Card, { CardItem, CardList } from '../Card';
import Slider from 'react-slick';

interface IProps {
  infinite: true | false;
  onChangeCard(currentCard: CardItem): void;
}

interface TemplateState {
  activeIndex: number;
  activeCardId: number;
  cards: CardList;
  infinite: true | false;
  onChangeCard(currentCard: CardItem): void;
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
  constructor(props: any) {
    super(props);

    this.state = {
      activeIndex: 0,
      activeCardId: cardsList[0].id,
      cards: cardsList,
      onChangeCard: this.props.onChangeCard,
      infinite: this.props.infinite
    };

    this.state.onChangeCard(cardsList[0]);
  }

  private handleSelect(_current: number, next: number): void {
    const { cards, onChangeCard } = this.state;
    let card: CardItem = cards[next];
    onChangeCard(card);

    this.setState({ activeIndex: next, activeCardId: card.id });
  }

  private calcSlidesToShowCount = (): number => {
    return Math.floor((window.innerWidth - 110) / 348);
  }

  private calcPaddingBetweenSlides = (): string => {
    return this.calcSlidesToShowCount() <= 3 ? '60px' : '0px';
  }

  render() {
    let settings = {
      arrows: false,
      infinite: this.state.infinite,
      speed: 1000,
      slidesToShow: this.calcSlidesToShowCount(),
      slidesToScroll: 1,
      centerMode: true,
      className: 'center',
      // adaptiveHeight: true,
      centerPadding: this.calcPaddingBetweenSlides(),
      focusOnSelect: true,
      beforeChange: (current: number, next: number) => {
        this.handleSelect(current, next);
      }
    };

    return (
      <Slider {...settings}>
        {this.state.cards.map((card: CardItem) => (
          <Card key={card.id} data={card} active={this.state.activeCardId === card.id} />
        ))}
      </Slider>
    );
  }
}

export default CardSlider;
