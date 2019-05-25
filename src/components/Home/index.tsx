import * as React from 'react';
import CardSlider from '../CardSlider';
import Balance from '../Balance';
// import Tabs from '../Tabs';
import TransactionHistory from '../TransactionHistory';
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

interface IHomeProps extends WithStyles<typeof styles> {}
interface IHomeState {
  currentCard: CardItem;
  currentTabId: number;
}

class Home extends React.Component<IHomeProps, IHomeState> {
  constructor(props: IHomeProps) {
    super(props);

    this.state = {
      currentTabId: 0,
      currentCard: {
        number: 1000,
        id: 1,
        classes: '',
        active: true,
        balance: 927.1,
        income_total: 22.4,
        spent_total: 1234.5,
        holder_name: 'Lindsey Johnson',
        expired_at: '08/21',
        cvv: 123
      } as CardItem
    };
  }

  holdCurrentCard = (currentCard: CardItem) => {
    this.setState({ ...this.state, currentCard: currentCard });
  }

  handleChange = (event: any, currentTabId: any) => {
    this.setState({ ...this.state, currentTabId: currentTabId });
  }

  render() {
    const { currentCard, currentTabId } = this.state;
    const { classes } = this.props;
    const tabClasses = { root: classes.tabRoot, selected: classes.tabSelected };
    // TODO: fix not change children components after change current state
    return (
      <div>
        <Balance total={currentCard.balance} title="Your balance" />
        <CardSlider
          infinite={true}
          onChangeCard={(current: CardItem) => this.holdCurrentCard(current)}
        />
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

          {currentTabId === 0 && <TransactionHistory type="send" forCardId={currentCard.id} />}
          {currentTabId === 1 && <TransactionHistory type="receive" forCardId={currentCard.id} />}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
