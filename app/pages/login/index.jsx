import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getData } from '../../redux-model/actions/test';
import styles from './index.less';

class Login extends Component {
  render() {
    return (
      <div className={styles.container}>
        <p>hello world 666!</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('state==', state);
  return {};
};

const mapDispatchToProps = ({
  getData,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
