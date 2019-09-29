import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import Home from '../body/home/Home';
import Project from '../body/projects/Project';
import Hackathon from '../body/hackathon/Hackathon';
import NewProject from '../body/projects/NewProject'
import User from '../body/user/User';

function Routes() {
  return (
    <div className="routes">
    <Switch>
      <Route exact path={`/user/:handle`} component={User} />
      <Route exact path={`/projects/:handle`} component={Project} />
      <Route exact path={`/hackathon/:handle`} component={Hackathon} />
      <Route exact path={`/projects/new/:handle`} component={NewProject} />
      <Route exact path={`/`} component={Home} />
      <Route render ={function () {
        return <p>Not found</p>
      }} />
    </Switch>
    </div>
  );
}

export default Routes;
