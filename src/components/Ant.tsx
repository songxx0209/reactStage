import * as React from "react";
import { add, del } from '../lib/common';

// 限制props的类型
interface AntProps {
  name: string
  company: string,
}

// 限制state的类型
interface AntState {
  time: number,
}

export default class Ant extends React.Component<AntProps, AntState> {
  constructor(props: any) {
    super(props);
    this.state = {
      time: 32,
    }
  }
  handleChange() {
    let time = 44;
    this.setState({
      time,
    });
  }
  onAdd() {
    add('hello world');
  }
  onDel() {
    del();
  }
  render() {
    return (
      <div>
        <h1>
          Hello, I am {this.props.name}, I in {this.props.company} now!
          hellow world
          <br />
          time: {this.state.time}
        </h1>
        <br />
        <button onClick={ () => this.handleChange() }>login</button>

        <br/>
        <button onClick={this.onAdd.bind(this)}>add</button>
        <button onClick={this.onDel.bind(this)}>delete</button>
      </div>
    )
  }
}