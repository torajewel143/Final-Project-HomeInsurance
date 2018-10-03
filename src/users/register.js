import React, {Component} from 'react';
import axios from 'axios';

export default class Register extends Component{
    constructor(props){
        super(props);

        this.onChangeUserId = this.onChangeUserId.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeRePassword = this.onChangeRePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            user_id: '',
            password: '',
            re_password: '',
        }
    }

    onChangeUserId(e){
        this.setState({
            user_id: e.target.value
        })
        // console.log(e.target.value);
    }

    onChangePassword(e){
        this.setState({
            password: e.target.value
        })
        // console.log(e.target.value);
    }

    onChangeRePassword(e){
        this.setState({
            re_password: e.target.value
        })
        // console.log(e.target.value);
    }

    onSubmit(e){
        e.preventDefault();
        const login = {
            user_id: this.state.user_id,
            password: this.state.password,
            re_password: this.state.re_password,
        }
        axios.post('198.74.51.193:4200/user/register', login).then(res => {
            console.log("Valid Response");
            console.log(res.data);
            localStorage.setItem('access_token', res.data.token);
            console.log(`The access token is: ${localStorage.access_token}`);
        });
    }

    render(){
        return(
            <div className="row mt-5">
                <div className="col-md-6 offset-md-3">

                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="user-id-id">User ID <span className='form-required'>*</span></label>
                            <input type="text" className="form-control" id="user-id-id" placeholder="Your User ID" onChange={this.onChangeUserId} value={this.state.user_id} required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password-id">Password <span className='form-required'>*</span></label>
                            <input type="password" className="form-control" id="password-id" placeholder="Password" onChange={this.onChangePassword} value={this.state.password} required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="re-password-id">Re-enter Password <span className='form-required'>*</span></label>
                            <input type="password" className="form-control" id="re-password-id" placeholder="Password" onChange={this.onChangeRePassword} value={this.state.re_password} required />
                        </div>
                        <button type="submit" className="btn btn-primary">Register</button>
                    </form>
                </div>
            </div>
        )
    }
}
