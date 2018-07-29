import React, { Component } from 'react';


class ChildOne extends Component {
  componentDidMount() {
    console.log('child one');
  }
  render() {

    console.log('render one');
    return (
      <div>
        <h1>child one</h1>
      </div>
    );
  }
}

export default ChildOne;