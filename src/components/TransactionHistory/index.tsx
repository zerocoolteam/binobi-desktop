import * as React from 'react';

type TransactionHistoryType = {
  type: string;
  position?: string;
};

interface IProps extends TransactionHistoryType {}
interface IState extends IProps {}

class TransactionHistory extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      type: this.props.type
    };
  }

  // TODO: temp
  renderText() {
    return this.state.type === 'send' ? 'Send money' : 'Received money';
  }

  render() {
    return <div>{this.renderText()}</div>;
  }
}

export default TransactionHistory;
