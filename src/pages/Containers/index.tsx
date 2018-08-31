import React from 'react';
import Storage from 'store';

interface Props {
  history: any
}

interface State {}

export default class Containers extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {}
  }
  cancel() {
    Storage.remove('user');
    this.props.history.push('/login');
  }
  render() {
    return (
      <div>
        <button onClick={() => {this.cancel()}}>注销</button>
        <hr/>
        <h1>container</h1>
      </div>
    );
  }
}