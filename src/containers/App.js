import { connect } from 'react-redux';
import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import Css from '../assets/css/nav.css';
class App extends Component {
  constructor(props) {

    // this.goPage = this.goPage.bind(this);

    super(props);
    this.state = {
      homeStyle: true,
      publishStyle: false,
      myStyle: false
    };
  }

  componentWillMount() {
    console.log(Css);
    this.handleNavStyle(this.props);
  }
  componentDidMount() {
  }

  componentWillReceiveProps(newProps) {
    this.handleNavStyle(newProps);
  }

  handleNavStyle(props) {
    switch (props.location.pathname) {
      case '/home/index':
        this.setState({
          homeStyle: true,
          publishStyle: false,
          myStyle: false
        });
        break;
      case '/home/publish':
        this.setState({
          homeStyle: false,
          publishStyle: true,
          myStyle: false
        });
        break;
      case '/home/my':
        this.setState({
          homeStyle: false,
          publishStyle: false,
          myStyle: true
        });
        break;
      default:
        break;
    }
  }

  goPage(url) {
    browserHistory.push(url);
  }

  render() {
    const { children } = this.props;
    return (
      <div>
        <div>
          {children}
        </div>
        <div className='bottom-nav'>
          <ul onClick={this.goPage.bind(this, '/home/index')} >
            <li className={this.state.homeStyle ? 'home_active' : 'home'}></li>
            <li className={this.state.homeStyle ? 'text_active' : 'text'}>首页</li>
          </ul>
          <ul onClick={this.goPage.bind(this, '/home/publish')}>
            <li className={this.state.publishStyle ? 'publish_active' : 'publish'}></li>
            <li className={this.state.publishStyle ? 'text_active' : 'text'}>我要发布</li>
          </ul>
          <ul onClick={this.goPage.bind(this, '/home/my')}>
            <li className={this.state.myStyle ? 'my_active' : 'my'}></li>
            <li className={this.state.myStyle ? 'text_active' : 'text'}>我的</li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(App);
