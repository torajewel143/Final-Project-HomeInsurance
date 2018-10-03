import React, {Component} from 'react';
// import axios from 'axios';
import {Switch, Route} from 'react-router-dom';

import Index from './index';
import GetQuote from './getquote/GetQuote';
import ProperytDetails from './getquote/PropertyDetails';
import CoverageDetails from './getquote/CoverageDetails';
import RetriveQuote from './retrivequote/RetriveQuote';

export default class Dashboard extends Component{
    render(){
        return(
            <div className="container">
                <Switch>
                    <Route exact path='/dashboard' component={Index} />
                    <Route exact path='/dashboard/getquote/' component={GetQuote} />
                    <Route path='/dashboard/getquote/propertydetails' component={ProperytDetails} />
                    <Route path='/dashboard/getquote/coveragedetails' component={CoverageDetails} />
                    <Route path='/dashboard/retrivequote' component={RetriveQuote} />
                </Switch>
            </div>
        );
    }
}
