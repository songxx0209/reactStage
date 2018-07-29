import React, { Component } from 'react';


class ChildThree extends Component {
  componentDidMount() {
    console.log('child three');
  }
  render() {

    console.log('render three');
    return (
      <div>
        <h1>child three</h1>
      </div>
    );
  }
}

export default ChildThree;