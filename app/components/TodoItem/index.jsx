import React, { Component } from 'react';

class TodoItem extends Component {
  onCheckboxChange = (e) => {
    const { todo, deleteTodo } = this.props;
    deleteTodo(todo);
    e.target.checked = false;
  }
  render() {
    const { todo } = this.props;
    return (
      <div>
        <input type="checkbox" onChange={this.onCheckboxChange} />
        <span>{todo}</span>
      </div>
    );
  }
}

export default TodoItem;
