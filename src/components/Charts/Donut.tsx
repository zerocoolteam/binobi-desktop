import * as React from 'react';
import { Chart } from 'react-google-charts';

export default class Donut extends React.Component {
  public chart: any;
  public chartRef: any;

  constructor(props: any) {
    super(props);

    this.chartRef = React.createRef();
  }

  render() {
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

    return (
      <div ref={this.chartRef} className="chart-holder-2">
        <Chart chartType="PieChart" width="100%" height="400px" data={data} options={options} />
      </div>
    );
  }
}
