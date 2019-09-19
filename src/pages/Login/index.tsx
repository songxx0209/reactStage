import React from 'react';
import Storage from 'store';
// import Button from 'antd/lib/button';
import { Button } from 'antd';
// import './index.css';

// import './index.less';
// import './index.css';

// const styles = require('./index.css');

interface Props {
  history: any
}

interface State {
  name: string,
  password: string
}

export default class Login extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: '',
      password: '',
    }
  }
  submit() {
    const { name, password} = this.state;
    if (name === '' || password === '') {
      alert('账号或密码不能为空！');
    } else {
      Storage.set('user', { name, password });
      this.props.history.push('/container');
    }
  }
  reset() {
    this.setState({
      name: '',
      password: '',
    });
  }
  render() {
    return (
      <div>
        {/* <p className={ styles.app }>姓名：<input type="text" name="name" onChange={(e) => this.setState({name: e.target.value})} /></p> */}
        <p>密码：<input type="password" name="password" onChange={(e) => this.setState({password: e.target.value})} /></p>
        <p><input type="submit" value="确定" onClick={this.submit.bind(this)} />
        <input type="reset" value="取消" onClick={() => {this.reset()}} /></p>
        <Button type="primary" size="small">sdfsld</Button>
      </div>
    );
  }
}