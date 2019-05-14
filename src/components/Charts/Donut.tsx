import * as React from 'react';
import { Chart } from 'react-google-charts';
import {
  GoogleChartControl,
  GoogleChartWrapper,
  GoogleViz,
  ReactGoogleChartEvent,
  ReactGoogleChartProps
} from 'react-google-charts/dist/types';

import * as styles from './style.css';

export default class Donut extends React.Component<{}, { activeColumn: number }> {
  public chartRef: any;

  constructor(props: any) {
    super(props);

    this.chartRef = React.createRef();
  }

  render() {
    // const handleSelect = this.handleSelect
    const data = [['Type', 'Amount'], ['Spent', 1000], ['Receive', 4000]];
    const options = {
      backgroundColor: '#f8f9fa',
      pieHole: 0.7,
      is3D: false,
      pieSliceTextStyle: {
        color: 'black'
      },
      pieStartAngle: 140,
      slices: {
        0: { color: '#FA2E69' },
        1: { color: '#10C971' }
      },
      legend: 'none'
    };

    // const chartEvents = [
    //   {
    //     eventName: 'select',
    //     callback({ chartWrapper }) {
    //       this.props.handleSelect(chartWrapper.getChart().getSelection()[0].row);
    //     }
    //   } as ReactGoogleChartEvent
    // ];

    return (
      <div ref={this.chartRef}>
        <Chart chartType="PieChart" width="100%" height="400px" data={data} options={options} />
        {/*chartEvents={chartEvents} />*/}
      </div>
    );
  }
}
