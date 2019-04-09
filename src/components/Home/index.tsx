import * as React from 'react';
import HorizontalSlider from '../HorizontalSlider';
import * as styles from './style.css';

interface IState {
    count: number;
}

class Home extends React.Component<{}, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            count: 927.01
        };
    }

    render() {
        return (
            <div className={styles.background}>
                <div className={styles.balance}>
                    <span className={styles.title}>Your balance</span>
                    <br />
                    <span className={styles.count}>$ {this.state.count}</span>
                </div>

                <HorizontalSlider />
            </div>
        );
    }
}

export default Home;
