import * as React from 'react';
import { Input } from '../FormFields/Input';
import { ChangeEvent } from 'react';

type SearchObject = {
  value?: string;
};

interface IProps extends SearchObject {}

interface IState extends SearchObject {}

class SearchForm extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e: ChangeEvent<HTMLInputElement>) {
    this.setState({ value: e.target.value }, () => {
      console.log(this.state);
    });
  }

  handleSubmit(event: any) {
    console.log(this.state);
    alert('Отправленное имя: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input type="text" onChange={this.handleChange} label={'Search transaction'} />
        <input type="submit" value="Отправить" />
      </form>
    );
  }
}

export default SearchForm;
