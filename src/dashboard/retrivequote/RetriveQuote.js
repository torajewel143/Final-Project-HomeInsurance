import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

// Loading assets
var DashboardHomeImage = require('../../img/dashboard-image.jpeg');

export default class GetQuote extends Component{
    constructor(props){
        super(props);

        // Fetching Data from the server
        // console.log(localStorage.getItem('access_token'));
        axios.post('http://localhost:4200/property/list', {token: localStorage.getItem('access_token')} ).then(res => {
            console.log(res.data);
            this.state = {
                quotes: res.data.result,
            }
        });
    }

    render(){
        return(
            <div className="row mt-5">

                <div className="col-md-12 mb-5">
                    <h1 className="text-center">Retrive Quote</h1>
                </div>

                <div className="col-md-12">
                    <table className="table">
                        <thead>
                        <tr>
                          <th scope="col">QuoteID #</th>
                          <th scope="col">Residence Type</th>
                          <th scope="col">Address</th>
                          <th scope="col">City</th>
                          <th scope="col">State</th>
                          <th scope="col">Zip</th>
                          <th scope="col">Residence Use</th>
                          <th scope="col">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                            {this.state.result.map((object, i) => <td>{}</td>)}
                            <tr>
                                <th scope="row">ID</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
}
