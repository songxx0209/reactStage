import React, { Component } from 'react';
// import { connect } from 'react-redux';

class TodoCreator extends Component {
  onKeydownHandle(ev) {
    const { addTodo } = this.props;
    const value = ev.target.value;

    if (ev.key === 'Enter' && value) {
      addTodo(ev.target.value);
      ev.target.value = '';
    }
  }
  render() {
    return (
      <div>
        <input type="text" onKeyDown={this.onKeydownHandle.bind(this)} />
      </div>
    );
  }
}

export default TodoCreator;
