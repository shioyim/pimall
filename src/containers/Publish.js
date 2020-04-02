import { connect } from 'react-redux';
import React, { Component } from 'react';

class Cart extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <div className="publish">
        <h1>发布</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Cart
);
