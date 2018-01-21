import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { getInfo } from '../../redux-model/actions/test';
import styles from './index.less';

class Login extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.getInfo();
  }
  render() {
    return (
      <div className={styles.container}>
        <p>hello world 666!</p>

        <button>
          <Link to="/article">挑战</Link>
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('state==', state);
  return {};
};

const mapDispatchToProps = ({
  getInfo,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
