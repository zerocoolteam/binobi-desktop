import * as React from 'react';
import * as styles from './style.css';

interface IState {
    count: number;
}

interface IProps {
    count?: number;
}

class Card extends React.Component<IProps, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            count: 0
        };
    }

    render() {
        return <div className={styles.background}>{this.props.count}</div>;
    }
}

export default Card;
