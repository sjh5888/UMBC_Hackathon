import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import Home from '../body/home/Home';
import Project from '../body/projects/Project';
import Hackathon from '../body/hackathon/Hackathon';
import User from '../body/user/User';

function Routes() {
  return (
    <div className="routes">
    <Switch>
      <Route exact path={`/user`} component={User} />
      <Route exact path={`/projects`} component={Project} />
      <Route exact path={`/hackathon`} component={Hackathon} />
      <Route exact path={`/`} component={Home} />
      <Route render ={function () {
        return <p>Not found</p>
      }} />
    </Switch>
    </div>
  );
}

export default Routes;
