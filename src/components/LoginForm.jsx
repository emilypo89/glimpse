import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

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
			redirectTo: '/group'
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
				<div className="panel panel-default">
  			<div className="panel-heading">
   			 <h4 className="panel-title">login</h4>
  			</div>
	  		<div className="panel-body">
	     		<form>
	          <div className="form-group">
	            <label for="email">Email Address:</label>
	            <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
	          </div>
	          <div className="form-group">
	            <label for="password">Password:</label>
	            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
	          </div>
          </form>
			    <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Login</button>
	  		</div>
			</div>
			)
		}
	}
}

export default LoginForm
