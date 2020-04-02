import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from './containers/App';
import Dashboard from './containers/Dashboard';
import Publish from './containers/Publish';
import Private from './containers/user/Index';
import Index from './containers/Index';
import Lantern from './containers/Lantern';

export default (
  <Route>
    <Route path="/home" exact component={App}>
      <IndexRoute component={Dashboard} />
      <Route path="/home/publish" component={Publish} />
      <Route path="/home/my" component={Private} />
      <Route path="/home/index" component={Index} />
    </Route>
    <Route path="/lantern" component={Lantern}></Route>
  </Route>
);

