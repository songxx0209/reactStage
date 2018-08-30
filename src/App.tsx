import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
// import Ant from './components/Ant';

interface Props {}

interface State {
  list: Array<any>,
}

export default class App extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      list: [],
    }
  }
  addItem(value: any) {
    let newState = this.state.list;
    newState.push({
      value,
      id: new Date().getTime(),
    });
    this.setState({
      list: newState,
    });
  }
  delItem(id: any) {
    const { list } = this.state;
    const newState = list.filter(item => {
      return item.id !== id;
    });

    console.log('newState=', newState);
    this.setState({
      list: newState
    });
  }

  render() {
    console.log(this.state.list);
    return (
      <div>
        <h1>Todos</h1>
        <TodoList itemList={this.state.list} delItem={this.delItem.bind(this)} />
        <AddTodo addItem={this.addItem.bind(this)} />
        <hr/>
        {/* <Ant name="song" company={`woqu`}></Ant> */}
      </div>
    );
  }
}