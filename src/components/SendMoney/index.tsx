import * as React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withStyles, Theme, WithStyles, createStyles } from '@material-ui/core/styles';
import * as sendMoneyStyles from './style.css';
import TransactionForm from './TransactionForm';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: '#f8f9fa',
      marginTop: '32px',
      width: '100%'
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

interface ISendMoneyProps extends WithStyles<typeof styles> {}
interface ISendMoneyState {
  currentTabId: number;
}

class SendMoney extends React.Component<ISendMoneyProps, ISendMoneyState> {
  constructor(props: ISendMoneyProps) {
    super(props);

    this.state = {
      currentTabId: 0
    };
  }

  handleChange = (event: any, currentTabId: any) => {
    this.setState({ ...this.state, currentTabId: currentTabId });
  }

  render() {
    const { currentTabId } = this.state;
    const { classes } = this.props;
    const tabClasses = { root: classes.tabRoot, selected: classes.tabSelected };

    return (
      <div className={sendMoneyStyles.blockContainer}>
        <h1 className={sendMoneyStyles.blockTitle}>Send Money</h1>
        <div className={classes.root}>
          <Tabs
            value={currentTabId}
            onChange={this.handleChange}
            centered
            classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
          >
            <Tab label="Card" classes={tabClasses} />
            <Tab label="Bank" classes={tabClasses} />
          </Tabs>
          {/*<div className={classes.middleElementContainer}>{this.middleElement()}</div>*/}
          {currentTabId === 0 && (
            <div className={sendMoneyStyles.blockContainer}>
              <TransactionForm submitButton submitButtonText={'Confirm'} />
            </div>
          )}
          {currentTabId === 1}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(SendMoney);
