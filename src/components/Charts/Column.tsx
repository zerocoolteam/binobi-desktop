import * as React from 'react';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  BarSeries,
  Title,
  Legend
} from '@devexpress/dx-react-chart-material-ui';
import { createStyles, withStyles } from '@material-ui/core/styles';
import { Stack, Animation, EventTracker } from '@devexpress/dx-react-chart';
import * as styles from './style.css';

const legendStyles = () =>
  createStyles({
    root: {
      display: 'flex',
      margin: 'auto',
      flexDirection: 'row'
    }
  });

// const legendRootBase = ({ classes, ...restProps }) => (
//   <Legend.Root {...restProps} className={classes.root} />
// );
// const Root = withStyles(legendStyles, { name: 'LegendRoot' })(legendRootBase);
// const legendLabelStyles = () => ({
//   label: {
//     whiteSpace: 'nowrap',
//   },
// });
// const legendLabelBase = ({ classes, ...restProps }) => (
//   <Legend.Label className={classes.label} {...restProps} />
// );
// const Label = withStyles(legendLabelStyles, { name: 'LegendLabel' })(legendLabelBase);

export default class Column extends React.Component<
  {},
  { data: { created_at: string; receive: number; spent: number }[] }
> {
  constructor(props: any) {
    super(props);

    const data = [
      {
        created_at: 'Mon',
        receive: 36,
        spent: 38
      },
      {
        created_at: 'Tue',
        receive: 51,
        spent: 21
      },
      {
        created_at: 'Wed',
        receive: 23,
        spent: 180
      },
      {
        created_at: 'Thu',
        receive: 200,
        spent: 13
      },
      {
        created_at: 'Fri',
        receive: 144,
        spent: 115
      },
      {
        created_at: 'Sat',
        receive: 16,
        spent: 10
      },
      {
        created_at: 'Sun',
        receive: 126,
        spent: 150
      }
    ];

    this.state = {
      data: data
    };
  }

  handleClick(e: any) {
    console.log(e);
  }

  render() {
    const { data } = this.state;

    return (
      <div className={styles.columnChartContainer}>
        <Chart data={data} width={730} height={300}>
          <ArgumentAxis />
          <ValueAxis indentFromAxis={20} />

          <BarSeries
            name="Receive"
            valueField="receive"
            argumentField="created_at"
            color="#10C971"
          />
          <BarSeries name="Spent" valueField="spent" argumentField="created_at" color="#FA2E69" />
          <Legend position="top" />
          <Stack />
          <EventTracker onClick={this.handleClick} />
          <Animation />
        </Chart>
      </div>
    );
  }
}
