import React, { Component } from 'react';
import axios from 'axios';

// add user conditional component
class AddUser extends Component {
	constructor() {
		super();
		this.state = {
			email: ""
		}
		this.handleChange = this.handleChange.bind(this)	
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	// function to update state when user types
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	// axios request to server when user submits
	// in response hide the add new user form, another axios request to the server to add user to groups, and then refresh the users 
	handleSubmit(event) {
		event.preventDefault()
		axios
			.post('/auth/addUser/addGroup', {
				email: this.state.email,
				id: this.props.currentGroup
			})
			.then(response => {
				console.log("response after handle submit");
				console.log(response);
				if (!response.data.errmsg) {
					console.log('group added to user');
					this.props.hideAddUserForm();
						axios.post("/group/addUser", {
							groupID: this.props.currentGroup,
							userID: response.data._id
						}).then(response => {
							console.log("response from adding user to group axios");
							if (!response.data.errmsg) {
								console.log("user added to group");
								console.log(response.data.users);
								this.props.refreshUsers(response.data.users);
							}
						});
				} 
				else {
					console.log('duplicate');
				}
			});
	}


	render(){
		return(
			<div className="row" id="addUserRow">
				<div className="col-lg-4"></div>
				<div className="col-lg-4">
					<div className="panel panel-default">
			  		<div className="panel-heading" id="addUserHeading">
			   			<h4 className="panel-title text-center" id="addUserTitle">add a user</h4>
			  		</div>
			  		<div className="panel-body" id="addUserPanel">
		     			<form className="form-inline text-center">
							<div className="form-group text-center addUserText">
								<label for="email">new user's email:</label>
								<input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
		    				</div>
		    			</form>
				    <button type="button" className="btn btn btn-primary actionButton center-block" id="addUserButton" onClick={this.handleSubmit}>add a new user</button>
		  	</div>
			</div>
			</div>
			<div className="col-lg-4"></div>
			</div>
		)
	}
}

export default AddUser;