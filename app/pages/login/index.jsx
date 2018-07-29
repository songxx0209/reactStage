import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router';

import request from '../../lib/request';

import { getInfo } from '../../redux-model/actions/test';

import ChildOne from './childComponent/childOne';
import ChildTow from './childComponent/childTow';
import ChildThree from './childComponent/childThree';
import styles from './index.less';

class Login extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      count: 0,
    }
  }
  componentDidMount() {
    // this.props.getInfo();
    console.log('componentDidMount');

    let self = this;
    setTimeout(function() {
      self.setState({
        count: 0,
      });

      console.log('componentDidMount === next');
    }, 2000)
  }
  render() {
    console.log('render');
    return (
      <div className={styles.container}>
        <p>hello world 666!</p>
        
        <ChildOne />
        <ChildTow />
        <ChildThree />
        <button>
          {/* <Link to="/article">挑战</Link> */}
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
