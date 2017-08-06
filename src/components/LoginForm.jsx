import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './login_signup.css';

// login in form component
class LoginForm extends Component {
	constructor() {
		super()
		this.state = {
			email: '',
			password: '',
			redirectTo: null
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	// function to change state as user types
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	// on submit this function logs in the user and redirects to the dashboard
	handleSubmit(event) {
		event.preventDefault()
		console.log('handleSubmit')
		this.props._login(this.state.email, this.state.password)
		this.setState({
			redirectTo: '/dashboard'
		})
	}

	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		} else {
			return (
				<div className="row" id="loginRow">
					<div className="col-lg-4"></div>
					<div className="col-lg-4">
						<div className="panel panel-default">
		  				<div className="panel-heading" id="loginHeading">
		   					<h4 className="panel-title text-center" id="loginPanel">login</h4>
		  				</div>
			  			<div className="panel-body" id="panelBody">
			     			<form>
			          	<div className="form-group text-center">
			            	<label htmlFor="email">email address:</label>
			            	<br />
			            	<input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
			          	</div>
			          	<div className="form-group text-center">
			            	<label htmlFor="password">password:</label>
			            	<br />
			            	<input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
			          	</div>
		          	</form>
					    	<button type="button" className="btn btn-primary actionButton center-block" onClick={this.handleSubmit}>login</button>
			  			</div>
						</div>
					</div>
					<div className="col-lg-4"></div>
				</div>
			)
		}
	}
}

export default LoginForm
