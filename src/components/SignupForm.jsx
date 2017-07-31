import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

class SignupForm extends Component {
	constructor() {
		super()
		this.state = {
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
				email: this.state.email,
				password: this.state.password
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
			<div className="panel panel-default">
  			<div className="panel-heading">
   			 <h4 className="panel-title">sign up</h4>
  			</div>
	  		<div className="panel-body">
	        <form>
		        <div className="form-group">
		          <label for="firstName">First Name:</label>
		          <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange}  />
		        </div>
		        
		        <div className="form-group">
		          <label for="lastName">Last Name:</label>
		          <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange}  />
		        </div>

		        <div className="form-group">
		          <label for="email">Email Address:</label>
		          <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
		        </div>
		        
		        <div className="form-group">
		          <label for="password">Password:</label>
		          <input type="password" name="password" value={this.state.password} onChange={this.handleChange}  />
		        </div>
		        <div className="form-group">
		          <label for="confirmPassword">Confirm Password:</label>
		          <input type="password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange} />
		        </div>
		      </form>      
          <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Sign Up</button>
	  		</div>
			</div>
		)
	}
}

export default SignupForm
