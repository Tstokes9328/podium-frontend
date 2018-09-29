//Imports
import React from 'react';
import {Switch, Route} from 'react-router-dom';

//Components
import Dashboard from './components/dashboard/Dashboard';
import ReviewPage from './components/review-page/ReviewPage';

//Routes
export default (
    <Switch>
        <Route exact path="/" component={Dashboard}/>
        <Route path="/review/:id" component={ReviewPage}/>
    </Switch>
)