import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Campaigns  from '../components/campaigns/index'
import About  from '../components/about/index'

export default function HomeRoutes() {
    return (
        <Switch>
            <Route exact path='/' component={Campaigns} />
            <Route exact path='/campaign' component={Campaigns} />
            <Route exact path="/about" component={About} />
        </Switch>
    );
}
