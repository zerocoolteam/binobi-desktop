import * as React from 'react';
import Card, { CardItem, CardList } from '../Card';
import Slider from 'react-slick';

import * as styles from './style.css';

type TemplateState = Readonly<{
  activeIndex: number;
  activeCardId: number;
  cards: CardList;
}>;

const cardsList: CardList = [
  { count: 100, id: 1, classes: styles.background, active: true },
  { count: 200, id: 2, classes: styles.background, active: false },
  { count: 300, id: 3, classes: styles.background, active: false },
  { count: 400, id: 4, classes: styles.background, active: false },
  { count: 500, id: 5, classes: styles.background, active: false },
  { count: 600, id: 6, classes: styles.background, active: false }
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
