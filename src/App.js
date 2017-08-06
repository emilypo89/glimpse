import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Group from './components/group';
import Landing from './components/landing';
import Dashboard from './components/dashboard';

const divStyle = {
	height: 600
}

// this component sets the state of the logged in user
class App extends Component {
	constructor() {
		super()
		this.state = {
			loggedIn: false,
			user: null,
			userID: "",
			groups: [],
			currentGroup: ""
		}
		this._logout = this._logout.bind(this)
		this._login = this._login.bind(this)
		this.refreshGroup = this.refreshGroup.bind(this)
	}

	// axios request to get the user data when component mounts
	componentDidMount() {
		axios.get('/auth/user').then(response => {
			console.log(response.data)
			if (!!response.data.user) {
				console.log('THERE IS A USER')
				this.setState({
					loggedIn: true,
					user: response.data.user
				})
			} else {
				this.setState({
					loggedIn: false,
					user: null
				});
			}
		});
	}

	// logout function
	_logout(event) {
		event.preventDefault()
		console.log('logging out')
		axios.post('/auth/logout').then(response => {
			console.log(response.data)
			// console.log(response)
			if (response.status === 200) {
				this.setState({
					loggedIn: false,
					user: null
				});
			}
		});
	}

	// login function
	_login(email, password) {
		axios
			.post('/auth/login', {
				email,
				password
			})
			.then(response => {
				console.log("login response");
				console.log(response)
				if (response.status === 200) {
					// update the state
					this.setState({
						loggedIn: true,
						user: response.data.user,
						userID: response.data.user._id,
						groups: response.data.user.groups
					});
				}
			});
	}

	// refreshes the group state
	refreshGroup (group) {
		this.setState({
			groups: group
		});
	}

	render() {
		return (
			<div className="App" style={divStyle}>
				<Route exact path="/login" render={() => <LoginForm _login={this._login} />} />
				<Route exact path="/signup" component={SignupForm} />
				<Route exact path="/group/:id" render={(props) => <Group {...this.props} {...props} userID={this.state.userID} groups={this.state.groups} _logout={this._logout} />} />
				<Route exact path="/" render={() => <Landing />} />
				<Route exact path="/dashboard" render={() => <Dashboard userID={this.state.userID} groups={this.state.groups} _logout={this._logout} refreshGroup={this.refreshGroup} />}  />
			</div>
		)
	}
}

export default App;
