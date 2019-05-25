import * as React from 'react';
// import Tabs from '../Tabs';
import TransactionHistory from '../TransactionHistory';
import Column from '../Charts/Column';
import Donut from '../Charts/Donut';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withStyles, Theme, WithStyles, createStyles } from '@material-ui/core/styles';
import * as reportStyles from './style.css';
import SearchForm from '../Home';
import { CardItem } from '../Card';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: '#f8f9fa',
      marginTop: '32px'
    },
    tabsRoot: {
      borderBottom: '1px solid #E8E9EC'
    },
    tabsIndicator: {
      backgroundColor: '#FF7D00'
    },
    middleElementContainer: {
      width: 'inherit',
      display: 'flex',
      flexFlow: 'column',
      alignItems: 'center',
      marginTop: 32,
      div: {
        paddingBottom: 0
      }
    },
    tabRoot: {
      textTransform: 'initial',
      width: 224,
      height: 28,
      color: '#A6AAB4',
      letterSpacing: 0.1,
      fontSize: 18,
      fontWeight: 600,
      fontFamily: 'Sarabun',
      '&$tabSelected': {
        color: '#3B414B'
      },
      '&:focus': {
        color: '#3B414B'
      },
      '&:first-child': {
        marginRight: 175
      },
      '&:last-child': {
        marginLeft: 175
      }
    },
    tabSelected: {},
    typography: {
      padding: theme.spacing.unit
    }
  });

interface IReportProps extends WithStyles<typeof styles> {}
interface IReportState {
  currentTabId: number;
}

class Reports extends React.Component<IReportProps, IReportState> {
  constructor(props: IReportProps) {
    super(props);

    this.state = {
      currentTabId: 0
    };
  }

  renderBadge = () => {
    return <p className={reportStyles.badge}>Sent</p>;
  }

  middleElement() {
    return (
      <div className={reportStyles.chartsContainer}>
        <Column />
        <Donut />
        {this.renderBadge()}
      </div>
    );
  }

  handleChange = (event: any, currentTabId: any) => {
    this.setState({ ...this.state, currentTabId: currentTabId });
  }

  render() {
    const { currentTabId } = this.state;
    const { classes } = this.props;
    const tabClasses = { root: classes.tabRoot, selected: classes.tabSelected };

    return (
      <div>
        <h1 className={reportStyles.title}>Reports</h1>
        <div className={classes.root}>
          <Tabs
            value={currentTabId}
            onChange={this.handleChange}
            centered
            classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
          >
            <Tab label="Week" classes={tabClasses} />
            <Tab label="Month" classes={tabClasses} />
            <Tab label="Year" classes={tabClasses} />
          </Tabs>
          <div className={classes.middleElementContainer}>{this.middleElement()}</div>*
          {currentTabId === 0 && <TransactionHistory type="week" />}
          {currentTabId === 1 && <TransactionHistory type="month" />}
          {currentTabId === 2 && <TransactionHistory type="year" />}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Reports);
