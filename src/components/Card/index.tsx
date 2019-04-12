import * as React from 'react';
import classNames from 'classnames';
import * as styles from '../HorizontalSlider/style.css';

export type CardItem = {
  id: number;
  count: number;
  classes: string;
  active: boolean;
};

export type CardList = {
  [key: number]: CardItem;
  map(param: (card: CardItem, index?: number, array?: CardList) => any): any;
};

interface IState {
  id: number;
  count: number;
  classes: string;
  active: boolean;
}

interface IProps {
  data: CardItem;
  active: boolean;
}

class Card extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);

    this.state = this.props.data;
  }

  getCardStyle(): string {
    return classNames(
      this.state.classes,
      { [`${styles.cardActive}`]: this.props.active },
      { [`${styles.cardSecond}`]: !this.props.active }
    );
  }

  render() {
    return <div className={this.getCardStyle()}>{this.state.count}</div>;
  }
}

export default Card;
