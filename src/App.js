import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Header from './components/Header';
import Home from './components/Home';
import Calendar from './components/calendar';
import Group from './components/group';
import Landing from './components/landing';
import Dashboard from './components/dashboard';

const divStyle = {
	height: 600
}

const DisplayLinks = props => {
	if (props.loggedIn) {
		return (
			<nav className="navbar">
				<ul className="nav">
					<li className="nav-item">
						<Link to="/" className="nav-link">
							Home
						</Link>
					</li>
					<li>
						<Link to="#" className="nav-link" onClick={props._logout}>
							Logout
						</Link>
					</li>
				</ul>
			</nav>
		)
	} else {
		return (
			<nav className="navbar">
				<ul className="nav">
					<li className="nav-item">
						<Link to="/" className="nav-link">
							Home
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/login" className="nav-link">
							login
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/signup" className="nav-link">
							sign up
						</Link>
					</li>
				</ul>
			</nav>
		)
	}
}

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
		this.selectGroup = this.selectGroup.bind(this)
	}

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

	refreshGroup (group) {
		this.setState({
			groups: group
		});
	}

	selectGroup (event) {
		event.preventDefault();
		// alert("reached selectGroup function");
		console.log(event);
		// this.setState({
		// 	currentGroup: groupID
		// });
		// console.log("currentGroup");
		// console.log(this.state.currentGroup);
	}


	render() {
		return (
			<div className="App" style={divStyle}>
				{/*<h1>This is the main App component</h1>*/}
				{/*<Header user={this.state.user} />*/}
				{/* LINKS to our different 'pages' */}
				{/*<DisplayLinks _logout={this._logout} loggedIn={this.state.loggedIn}  />*/}
				{/*  ROUTES */}
				{/* <Route exact path="/" component={Home} /> */}
				{/*<Route exact path="/" render={() => <Home user={this.state.user} />} />*/}
				<Route
					exact
					path="/login"
					render={() => <LoginForm _login={this._login} />}
				/>
				<Route exact path="/signup" component={SignupForm} />
				{/* <LoginForm _login={this._login} /> */}
				<Route exact path="/group/:id" render={(props) => <Group {...this.props} {...props} userID={this.state.userID} groups={this.state.groups} _logout={this._logout} />} />
				<Route exact path="/" render={() => <Landing />} />
				<Route exact path="/dashboard" render={() => <Dashboard userID={this.state.userID} groups={this.state.groups} _logout={this._logout} refreshGroup={this.refreshGroup} selectGroup={this.selectGroup} />}  />
			</div>
		)
	}
}

export default App
