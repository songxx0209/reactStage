import React, { Component } from 'react';


class ChildTow extends Component {
  componentDidMount() {
    console.log('child tow');
  }
  render() {

    console.log('render tow');
    return (
      <div>
        <h1>child tow</h1>
      </div>
    );
  }
}

export default ChildTow;