import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Campaigns  from '../../components/campaigns'
import About  from '../../components/about'

export default function HomeRoutes() {
  return (
        <Switch>
          <Route exact path='/' component={Campaigns} />
            <Route exact path='/campaign' component={Campaigns} />
          <Route exact path="/about" component={About} />
        </Switch>

  );
}
