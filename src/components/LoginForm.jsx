import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import './login_signup.css';

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

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit(event) {
		event.preventDefault()
		console.log('handleSubmit')
		this.props._login(this.state.email, this.state.password)
		// clean up the form
		// this.setState({
		// 	email: '',
		// 	password: ''
		// })
		// redirect - will clean form
		this.setState({
			redirectTo: '/dashboard'
		})
		// axios
		// 	.post('/auth/login', {
		// 		email: this.state.email,
		// 		password: this.state.password
		// 	})
		// 	.then(response => {
		// 		if (response.status === 200) {
		// 			// update the state
		// 		}
		// 		console.log(response)
		// 	})
	}

	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		} else {
			return (
				<div className="row">
					<div className="col-lg-4"></div>
					<div className="col-lg-4">
						<div className="panel panel-default">
		  				<div className="panel-heading">
		   					<h4 className="panel-title">login</h4>
		  				</div>
			  			<div className="panel-body">
			     			<form>
			          	<div className="form-group">
			            	<label for="email">email address:</label>
			            	<br />
			            	<input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
			          	</div>
			          	<div className="form-group">
			            	<label for="password">password:</label>
			            	<br />
			            	<input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
			          	</div>
		          	</form>
					    	<button type="button" className="btn btn-primary actionButton" onClick={this.handleSubmit}>login</button>
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
