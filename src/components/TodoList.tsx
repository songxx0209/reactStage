import * as React from "react";

interface Props {
  itemList: Array<any>,
  delItem?: any,
}

export default class TodoList extends React.Component<Props, any> {
  constructor(props: any) {
    super(props);
  }

  onDelItem(id: any) {
    // console.log('hello', id);
    this.props.delItem(id);
  }

  render() {
    const TodoItemList = this.props.itemList.map((todo: any, i: any) => {
      return (
        <li key={todo.id}>
          <span style={{ marginRight: 20 }}>{todo.value}</span>
          <button onClick={this.onDelItem.bind(this, todo.id)}>x</button>
        </li>
      );
    });
    return (
      <ul>{TodoItemList}</ul>
    );
  }
}
