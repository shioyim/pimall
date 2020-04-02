import { connect } from 'react-redux';
import React, { Component } from 'react';

class Private extends Component {
  render() {
    return (
      <div className="private">
        <h1>我的</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Private);
