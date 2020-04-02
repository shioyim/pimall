import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

class Dashboard extends Component {
  componentWillMount() {
    browserHistory.push('/home/index');
  }

  render() {
    return (
      <div>Dashboard</div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Dashboard);
