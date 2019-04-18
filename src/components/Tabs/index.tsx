import * as React from 'react';
import { ReactElement } from 'react';
import Tab from './Tab';

import * as styles from './style.css';
import classNames = require('classnames');

interface IProps {
  children: ReactElement[];
}

interface IState {
  activeTab: string;
  activePosition: string;
  childrenCount: number;
  children?: ReactElement[] | ReactElement;
}

class Tabs extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    let {
      props: { position, type }
    }: ReactElement = this.props.children[0];

    this.state = {
      activeTab: type,
      activePosition: position,
      childrenCount: this.props.children.length
    };
  }

  getUnderscoreStyles() {
    let countStyle: string = this.state.childrenCount === 2 ? styles.twoItem : styles.threeItem;
    switch (this.state.activePosition) {
      case 'left':
        return classNames(styles.underline, styles.leftActive, countStyle);
      case 'center':
        return classNames(styles.underline, styles.centerActive, countStyle);
      case 'right':
        return classNames(styles.underline, styles.rightActive, countStyle);
      default:
        return classNames(styles.underline, styles.leftActive, countStyle);
    }
  }

  render() {
    return (
      <div className={styles.tabs}>
        <div className={styles.tabList}>
          {this.props.children.map(child => {
            const { type, position } = child.props;

            return (
              <Tab
                activeTab={this.state.activeTab}
                key={type}
                type={type}
                activePosition={position}
                onClick={() => {
                  this.setState({ activeTab: type, activePosition: position });
                }}
              />
            );
          })}
        </div>
        <div className={this.getUnderscoreStyles()} />
        <div className="tab-content">
          {this.props.children.map(child => {
            return child.props.type !== this.state.activeTab ? undefined : child;
          })}
        </div>
      </div>
    );
  }
}

export default Tabs;
