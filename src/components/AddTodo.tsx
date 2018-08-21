import * as React from "react";

interface Props {
  addItem: any,
}

interface State {
  inpValue: any,
}

export default class AddTodo extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      inpValue: '',
    }
  }
  onInpChange(e: any) {
    let value = e.target.value;
    this.setState({
      inpValue: value,
    });
  }
  addTodo() {
    let value = this.state.inpValue;
    if (value) {
      this.props.addItem(value);
      this.setState({
        inpValue: '',
      })
    } else {
      alert('请先输入内容！');
    }

  }

  render() {
    return (
      <div className="add-todo">
        <input type="text" placeholder="Todo four" ref="todoTitle" value={this.state.inpValue} onChange={ this.onInpChange.bind(this) } />
        <button className="add-button" onClick={this.addTodo.bind(this)}>
          Add Todo
        </button>
      </div>
    );
  }
}
