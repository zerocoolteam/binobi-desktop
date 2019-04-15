import * as React from 'react';
import Card, { CardItem, CardList } from '../Card';
import Slider from 'react-slick';

type TemplateState = Readonly<{
  activeIndex: number;
  activeCardId: number;
  cards: CardList;
}>;

const cardsList: CardList = [
  { number: 1000, id: 1, classes: '', active: true },
  { number: 2000, id: 2, classes: '', active: false },
  { number: 3000, id: 3, classes: '', active: false },
  { number: 4000, id: 4, classes: '', active: false },
  { number: 5000, id: 5, classes: '', active: false },
  { number: 6000, id: 6, classes: '', active: false }
];

const initialState: TemplateState = {
  activeIndex: 0,
  activeCardId: cardsList[0].id,
  cards: cardsList
};

class HorizontalSlider extends React.Component<{}, TemplateState> {
  constructor(props: any) {
    super(props);

    this.state = initialState;
  }

  handleSelect(current: number, next: number): void {
    let card: CardItem = this.state.cards[next];
    this.setState({ activeIndex: next, activeCardId: card.id });
  }

  render() {
    let settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      className: 'center slider variable-width',
      centerPadding: '60px',
      focusOnSelect: true,
      beforeChange: (current: number, next: number) => {
        this.handleSelect(current, next);
      }
    };

    return (
      <div>
        <Slider {...settings}>
          {this.state.cards.map((card: CardItem) => (
            <Card key={card.id} data={card} active={this.state.activeCardId === card.id} />
          ))}
        </Slider>
      </div>
    );
  }
}

export default HorizontalSlider;
