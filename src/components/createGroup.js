import React, { Component } from 'react';
import './createGroup.css';
import axios from 'axios';

// create group conditional component
class CreateGroup extends Component {
	constructor() {
		super();
		this.state = {
			groupName: "",
			groupDescription: ""
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.addGroupToUser = this.addGroupToUser.bind(this)
	}

	// changes the state as the user types
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	// axios request to server on submit of new group 
	// in response hiding the form, adding the group to user, and refreshing the groups
	handleSubmit(event) {
		event.preventDefault()
		// TODO - validate!
		axios
			.post('/group/group', {
				groupName: this.state.groupName,
				groupDescription: this.state.groupDescription,
				users: this.props.userID
			})
			.then(response => {
				console.log("response after handle submit");
				console.log(response);
				console.log("response id: " + response.data._id);
				if (!response.data.errmsg) {
					console.log('group added');
					this.props.hideForm();
					this.addGroupToUser(response.data._id, this.props.userID);
					this.getUserGroups(this.props.userID)
				} else {
					console.log('duplicate');
				}
			});
	}

	// function adding group to user
	addGroupToUser = (groupID, userID) => {
		console.log("made it to add group to user");
		axios.post('/auth/addGroup', {
			groups: groupID,
			userID: userID
		}).then(response => {
			console.log(response);
		});
	}

	// function to get the users groups inorder to refresh them
	getUserGroups = (userID) => {
		axios.post('/auth/api/user', {
			userID: userID
		}).then(response => {
			console.log("getUserGroups response");
			console.log(response);
			this.props.refreshGroup(response.data.groups);
		});
	}

	render(){
		return(
			<div className="row" id="createGroupRow">
				<div className="col-lg-2"></div>
				<div className="col-lg-8">
					<div className="panel panel-default">
	  				<div className="panel-heading" id="groupHeading">
	   					<h4 className="panel-title text-center" id="createGroupTitle">create a group</h4>
	  				</div>
		  			<div className="panel-body" id="groupPanel">
		     			<form className="form-inline text-center">
							<div className="form-group text-center groupText" >
								<label htmlFor="groupName">name:</label><br />
								<input type="text" name="groupName" value={this.state.groupName} onChange={this.handleChange} />
		    				</div>
					
							<div className="form-group text-center groupText">
								<label htmlFor="groupDescription">description:</label><br />
								<input type="text" name="groupDescription" value={this.state.groupDescription} onChange={this.handleChange}/>
				    		</div>
		    			</form>
				    <button type="button" className="btn btn-primary actionButton center-block" id="createGroupButton" onClick={this.handleSubmit}>create group</button>
		  			</div>
		  		</div>
				</div>
				<div className="col-lg-2"></div>
			</div>
		)
	}
}

export default CreateGroup;