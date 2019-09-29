import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import Home from '../body/home/Home';
import Group from '../body/home/groupComponent/Group';
import Hackathon from '../body/hackathon/Hackathon';
import User from '../body/user/User';

function Routes() {
  return (
    <div className="routes">
    <Switch>
      <Route exact path={`/user/:handle`} component={User} />
      <Route exact path={`/projects/:handle`} component={Group} />
      <Route exact path={`/hackathon/:handle`} component={Hackathon} />
      <Route exact path={`/`} component={Home} />
      <Route render ={function () {
        return <p>Not found</p>
      }} />
    </Switch>
    </div>
  );
}

export default Routes;
