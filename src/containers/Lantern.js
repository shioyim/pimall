import { connect } from 'react-redux';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
    };
    this.handleClickByState = this.handleClickByState.bind(this);
  }

  componentDidMount() {
    console.log(this.props);
  }

  handleClickByState() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <div>
        <div >
          <button onClick={this.handleClickByState}>
            {this.state.isToggleOn ? 'ON' : 'OFF'}
          </button>
          <p>
          </p>
          <h2>
            灯的状态: {this.state.isToggleOn ? '灭' : '亮' }
          </h2>
        </div>
        <div >
          <a href="https://github.com">By every one.</a> © 2020
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  lantern: state.lantern,
});

export default connect(mapStateToProps)(App);
