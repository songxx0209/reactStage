import React from 'react';
import {
  Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import Storage from 'store';
import createHistory from 'history/createBrowserHistory'

const history = createHistory()

import Login from './pages/Login';
import Containers from './pages/Containers';

interface Props {}

interface State {}

export default class App extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    console.log('componentDidMount');
    // Storage.set('user', { name:'Marcus' });
    // Storage.remove('user');
    let auth = Storage.get('user');
    
    if (auth) {
      history.push('/');
    } else { // 未登录
      history.push('/login');
    }
  }
  
  render() {
    return (
      <div>
        <Router history={history}>
          <Switch>
            <Route path="/" exact component={Containers} />
            <Route path="/login" component={Login} />
            <Redirect from='' to="/" />
          </Switch>
        </Router>
      </div>
    );
  }
}