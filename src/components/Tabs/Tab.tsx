import * as React from 'react';

import * as styles from './style.css';
import classNames = require('classnames');

export type TabType = {
  activeTab: string;
  type: string;
  activePosition: string;
  onClick(): void;
};

interface IProps extends TabType {}

interface IState extends TabType {}

class Tab extends React.Component<IProps, IState> {
  capitalizeFirstLetter(label: string) {
    return label.charAt(0).toUpperCase() + label.slice(1);
  }

  render() {
    const { activeTab, type, onClick } = this.props;

    return (
      <div
        className={classNames(styles.tabItem, { [`${styles.active}`]: activeTab === type })}
        onClick={onClick}
      >
        {this.capitalizeFirstLetter(type)}
      </div>
    );
  }
}

export default Tab;
