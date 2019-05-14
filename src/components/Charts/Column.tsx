import * as React from 'react';
import { Chart } from 'react-google-charts';
import { ReactGoogleChartEvent } from 'react-google-charts/dist/types';

export default class Column extends React.Component {
  render() {
    const data = [
      ['Element', 'Receive', 'Sent'],
      ['Mon', 1100, 560],
      ['Tue', 710, 800],
      ['Wed', 400, 1200],
      ['Thu', 1100, 200],
      ['Fri', 820, 150],
      ['Sat', 990, 900],
      ['Sun', 690, 480]
    ];

    const chartEvents = [
      {
        eventName: 'select',
        callback({ chartWrapper }) {
          console.log('Selected ', chartWrapper.getChart().getSelection());
        }
      } as ReactGoogleChartEvent
    ];

    return (
      <div>
        <Chart
          chartType={'ColumnChart'}
          data={data}
          options={
            // Chart options
            {
              backgroundColor: '#f8f9fa',
              colors: ['#10C971', '#FA2E69'],
              bar: { groupWidth: '10%' },
              legend: { position: 'top', textStyle: { color: '#757F8C' } },
              vAxis: { gridlines: { color: '#E8E9EC', count: 3 }, minorGridlines: null }
            }
          }
          width={'730px'}
          height={'200px'}
          legendToggle
          chartEvents={chartEvents}
        />
      </div>
    );
  }
}
