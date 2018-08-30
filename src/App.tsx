import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';


interface Props {}

interface State {
  list: Array<any>,
}


const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

function requireAuth(Layout: any) {
  if (false) { // 未登录
    return <Redirect to="/home" />;
  } else {
    return <Layout />
  }
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

        <Router>
          <div>
            {/* <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>

            <hr/> */}
            <Route exact path="/" component={() => requireAuth(About)}/>
            <Route path="/about" component={Home} />
          </div>
        </Router>
      </div>
    );
  }
}