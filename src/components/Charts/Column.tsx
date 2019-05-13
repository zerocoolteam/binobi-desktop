import * as React from 'react';
import { Chart } from 'react-google-charts';

export default class Column extends React.Component {
  render() {
    const data = [
      ['Element', 'Receive', 'Spent'],
      ['Mon', 1100, 560],
      ['Tue', 710, 800],
      ['Wed', 400, 1200],
      ['Thu', 1100, 200],
      ['Fri', 820, 150],
      ['Sat', 990, 900],
      ['Sun', 690, 480]
    ];

    return (
      <div className={'my-pretty-chart-container'}>
        <Chart
          chartType={'ColumnChart'}
          data={data}
          options={
            // Chart options
            {
              backgroundColor: '#f8f9fa',
              colors: ['#10C971', '#FA2E69'],
              bar: { groupWidth: '10%' },
              legend: { position: 'top' },
              vAxis: { gridlines: { color: '#E8E9EC', count: 3 }, minorGridlines: null }
            }
          }
          width={'730px'}
          height={'200px'}
          legendToggle
        />
      </div>
    );
  }
}
