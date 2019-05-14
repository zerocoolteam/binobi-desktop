import * as React from 'react';
import { Chart, PieSeries, Title } from '@devexpress/dx-react-chart-material-ui';
import { Animation, EventTracker, Palette, SelectionState } from '@devexpress/dx-react-chart';
import * as styles from './style.css';

// const compareTargets = (
//   { series, point }, { series: targetSeries, point: targetPoint },
// ) => series === targetSeries && point === targetPoint;

export default class Donut extends React.Component<
  {},
  { data: { type: string; amount: number }[]; selection: any[] }
> {
  constructor(props: any) {
    super(props);

    this.state = {
      data: [
        {
          type: 'Receive',
          amount: 36
        },
        {
          type: 'Spent',
          amount: 51
        }
      ],
      selection: []
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e: any) => {
    console.log(e);
  }

  // handleClick = ({ targets, location, event }: {targets: any, location: any, event: any}) => {
  //   console.log(location);
  //   console.log(event);
  //   console.log(targets);
  //
  //   const target = targets[0];
  //   if (target) {
  //     this.setState(({ selection }) => ({
  //       selection: [target],
  //     }));
  //   }
  // }

  render() {
    const { data, selection } = this.state;

    return (
      <div className={styles.donutChartContainer}>
        <Chart data={data} width={270} height={270}>
          <Palette scheme={['#10C971', '#FA2E69']} />
          <PieSeries valueField="amount" argumentField="type" innerRadius={0.7} />
          <EventTracker onClick={this.handleClick} />
          <SelectionState selection={selection} />
          <Animation />
        </Chart>
      </div>
    );
  }
}
