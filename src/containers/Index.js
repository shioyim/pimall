import { connect } from 'react-redux';
import React, { Component } from 'react';

class Index extends Component {
  render() {
    return (
      <div className="index">
        <h1>首页</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Index);
