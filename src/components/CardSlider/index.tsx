import * as React from 'react';
import Card, { CardItem, CardList } from '../Card';
import NewCard from '../Card/NewCard';

import Carousel from 'nuka-carousel';
import { CardSliderState } from '../../reducers/cardSliderReducer';

interface CardSliderProps {
  infinite: boolean;
  needNewCard?: boolean;

  changeCurrentCard(currentCard: CardItem | undefined): void;
}

interface TemplateState {
  activeIndex: number;
  activeCardId: number | string;
  infinite: boolean;
  needNewCard?: boolean;
}

class CardSlider extends React.Component<CardSliderProps & CardSliderState, TemplateState> {
  constructor(props: CardSliderProps & CardSliderState) {
    super(props);

    const { currentCard, changeCurrentCard } = this.props;

    this.state = {
      activeIndex: 0,
      activeCardId: currentCard.id,
      infinite: this.props.infinite,
      needNewCard: this.props.needNewCard || false
    };

    changeCurrentCard(currentCard);
  }

  private handleSelect(_current: number, next: number): void {
    const { changeCurrentCard, cardList } = this.props;
    let card: CardItem = cardList[next];
    let id;

    card ? (id = card.id) : (id = 'newCard');

    changeCurrentCard(card);

    this.setState({ activeIndex: next, activeCardId: id });
  }

  private handleClick(index: number, card: CardItem) {
    this.props.changeCurrentCard(card);

    this.setState({ activeIndex: index as number, activeCardId: card.id });
  }

  private calcSlidesToShowCount = (): number => {
    return Math.floor((window.innerWidth - 110) / 250);
  }

  private calcPaddingBetweenSlides = (): number => {
    return this.calcSlidesToShowCount() <= 3 ? 60 : 0;
  }

  render() {
    const { activeCardId, needNewCard, activeIndex } = this.state;
    const { cardList } = this.props;

    return (
      <Carousel
        slideIndex={activeIndex}
        // speed={2000}
        transitionMode={'scroll'}
        slidesToShow={3}
        // cellSpacing={20}
        wrapAround={true}
        dragging
        swiping
        cellAlign={'center'}
        enableKeyboardControls={true}
        // autoplay
        // autoplayInterval={2000}
        pauseOnHover
        withoutControls
        beforeSlide={(current: number, next: number) => {
          this.handleSelect(current, next);
        }}
      >
        {cardList.map((card: CardItem) => (
          <Card
            key={card.id}
            {...card}
            active={activeCardId === card.id}
            // onClick={(e: any) => this.handleClick(index as number, card)}
          />
        ))}
        {needNewCard && <NewCard key={'newCard'} active={activeCardId === 'newCard'} />}
      </Carousel>
    );
  }
}

export default CardSlider;
