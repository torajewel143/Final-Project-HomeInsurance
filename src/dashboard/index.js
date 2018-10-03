import React, {Component} from 'react';
// import axios from 'axios';
import {Link} from 'react-router-dom';

// Loading assets
var DashboardHomeImage = require('../img/dashboard-image.jpeg');

export default class User extends Component{
    render(){
        return(
            <div className="row mt-5">
                <div className="col-md-6">
                    <img className="" src={DashboardHomeImage} alt="dashboard home"/>
                </div>
                <div className="col-md-6 mt-5 pt-5">
                    <Link to={'/dashboard/getquote/'} className="btn btn-lg btn-info mb-5">Get a Quote</Link>
                    <br />
                    <Link to={'/dashboard/retrivequote/'} className="btn btn-lg btn-info">Retrive a Quote</Link>
                </div>
            </div>
        );
    }
}
