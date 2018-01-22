import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router';

import styles from './index.less';
import TodoCreator from 'components/TodoCreator';
import TodoItem from 'components/TodoItem';

// import { getData } from '../../redux-model/actions/test';


class Login extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }
  addTodo = (value) => {
    const todo = this.state.todos;
    todo.push(value);
    console.log('add=', todo);
    this.setState({ todos: todo });
  }
  deleteTodo = (value) => {
    const { todos } = this.state;
    const index = todos.indexOf(value);
    todos.splice(index, 1);
    console.log('delete=', index, todos);
    this.setState({ todos });
  }
  render() {
    const { todos } = this.state;
    return (
      <div className={styles.container}>
        <Link to="/articles">文章页面</Link>
        <hr />
        <div className={styles.todo}>
          <TodoCreator addTodo={this.addTodo} />
          { todos.map((todo, i) => (
            <TodoItem key={i} todo={todo} deleteTodo={this.deleteTodo} />
          ))}
        </div>
      </div>
    );
  }
}

export default Login;
