import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import CustomDesign from './style.css';

import User from './users/Users';
import Dashboard from './dashboard/Dashboard';

export default class App extends Component {
  render() {
    return (
        <Router>
        <div className="full-wrapper">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand">Homeowner Insurance</a>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to={'/'} className="nav-link">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link to={'/dashboard/getquote/'} className="nav-link">Get Quote</Link>
                  </li>
                  <li className="nav-item">
                    <Link to={'/dashboard/retrivequote'} className="nav-link">Retrive Quote</Link>
                  </li>
                  <li className="nav-item">
                    <Link to={'/dashboard/mypolicy'} className="nav-link">My Policy</Link>
                  </li>
                  <li className="nav-item">
                    <Link to={'/user/logout'} className="nav-link">Logout</Link>
                  </li>
                </ul>
              </div>
            </nav>
            </div>
            <Switch>
                <Route exact path='/' component={User} />
                <Route path='/user/*' component={User} />
                <Route path='/dashboard/*' component={Dashboard} />
            </Switch>
        </div>
        </Router>
    );
  }
}
