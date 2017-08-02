import React, { Component } from 'react';
import './dashboard.css';
import { Route, Link} from 'react-router-dom';
import helpers from '../utils/helpers';
import axios from 'axios';

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
	// newGroup () {
	// 	helpers.newGroup(groupData)
	// }

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}



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

	addGroupToUser = (groupID, userID) => {
		console.log("made it to add group to user");
		axios.post('/auth/addGroup', {
			groups: groupID,
			userID: userID
		}).then(response => {
			console.log(response);
		});
	}

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
			<div className="panel panel-default">
	  		<div className="panel-heading">
	   			<h4 className="panel-title">create a group</h4>
	  		</div>
		  	<div className="panel-body">
		     	<form>
						<div className="form-group">
							<label for="groupName">name:</label>
							<input type="text" name="groupName" value={this.state.groupName} onChange={this.handleChange} />
		    		</div>
					
						<div className="form-group">
							<label for="groupDescription">description:</label>
							<textarea type="text" name="groupDescription" value={this.state.groupDescription} onChange={this.handleChange}/>
				    </div>
		    	</form>
				    <button type="button" class="btn btn-primary" id="createGroupButton" onClick={this.handleSubmit}>create group</button>
		  	</div>
			</div>
		)
	}
}

export default CreateGroup;