import * as React from 'react';
import CardSliderContainer from '../../containers/CardSliderContainer';
import BalanceContainer from '../../containers/BalanceContainer';
import TransactionHistoryContainer from '../../containers/TransactionHistoryContainer';
import { CardItem } from '../Card';
import SearchForm from '../Common/SearchForm';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { withStyles, Theme, WithStyles, createStyles } from '@material-ui/core/styles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: '#f8f9fa',
      marginTop: '39px'
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
        outline: 'none'
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

interface HomeProps extends WithStyles<typeof styles> {
  changeTab(i: number): void;
  changeCurrentCard(currentCard: CardItem): void;
}

interface LocalHomeState {
  currentTabId: number;
}

class Home extends React.Component<HomeProps, LocalHomeState> {
  constructor(props: HomeProps) {
    super(props);

    this.state = {
      currentTabId: 0
    };
  }

  handleChange = (event: any, currentTabId: any) => {
    this.setState({ ...this.state, currentTabId: currentTabId });
  }

  render() {
    const { classes } = this.props;
    const { currentTabId } = this.state;
    const tabClasses = { root: classes.tabRoot, selected: classes.tabSelected };

    return (
      <div>
        <BalanceContainer title="Your balance" />
        <CardSliderContainer infinite={true} />
        <div className={classes.root}>
          <Tabs
            value={currentTabId}
            onChange={this.handleChange}
            centered
            classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
          >
            <Tab label="Send" classes={tabClasses} />
            <Tab label="Receive" classes={tabClasses} />
          </Tabs>

          <div className={classes.middleElementContainer}>
            <SearchForm submitButtonText={'Search transaction'} />
          </div>

          {currentTabId === 0 && <TransactionHistoryContainer type="send" />}
          {currentTabId === 1 && <TransactionHistoryContainer type="receive" />}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
