import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import './login_signup.css';

class SignupForm extends Component {
	constructor() {
		super()
		this.state = {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			confirmPassword: '',
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
		// TODO - validate!
		axios
			.post('/auth/signup', {
				firstName: this.state.firstName,
				lastName: this.state.lastName,
				email: this.state.email,
				password: this.state.password,
			})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('youre good')
					this.setState({
						redirectTo: '/login'
					})
				} else {
					console.log('duplicate')
				}
			})
	}
	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		}
		return (
			<div className="row">
				<div className="col-lg-4"></div>
				<div className="col-lg-4">
					<div className="panel panel-default">
		  			<div className="panel-heading">
		   				<h4 className="panel-title">sign up</h4>
		  			</div>
			  		<div className="panel-body">
			        <form>
				        <div className="form-group">
				          <label for="firstName">first name:</label>
				          <br />
				          <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange}  />
				        </div>
				        
				        <div className="form-group">
				          <label for="lastName">last name:</label>
				          <br />
				          <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange}  />
				        </div>

				        <div className="form-group">
				          <label for="email">email address:</label>
				          <br />
				          <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
				        </div>
				        
				        <div className="form-group">
				          <label for="password">password:</label>
				          <br />
				          <input type="password" name="password" value={this.state.password} onChange={this.handleChange}  />
				        </div>
				        <div className="form-group">
				          <label for="confirmPassword">confirm password:</label>
				          <br />
				          <input type="password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange} />
				        </div>
				      </form>      
		          <button type="button" className="btn btn-primary actionButton" onClick={this.handleSubmit}>sign up</button>
			  		</div>
					</div>
				</div>
				<div className="col-lg-4"></div>
			</div>
		)
	}
}

export default SignupForm
