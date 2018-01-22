import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { getInfo } from '../../redux-model/actions/test';
import styles from './index.less';

class Login extends Component {
  componentDidMount() {
    console.log(this.props.getInfo());
    console.log('spppp', this.props);
  }
  render() {
    const { test } = this.props;
    let articleEle = '';
    if (test.data) {
      articleEle = test.data.map(item => <p key={item.id}>{item.title}</p>);
    }
    return (
      <div>
        <div className={styles.container}>
          <p>hello world 666!</p>

          <button>
            <Link to="/">回到首页</Link>
          </button>
        </div>
        {articleEle}
      </div>
    );
  }
}

const mapStateToProps = state =>
  // console.log('state==', state);
  ({
    test: state.test,
  });
const mapDispatchToProps = ({
  getInfo,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
