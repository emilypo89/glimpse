import React, { Component } from 'react';
import './createGroup.css';
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
		})
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

	render(){
		return(
			<div className="row" id="createGroupRow">
				<div className="col-lg-4"></div>
				<div className="col-lg-4">
					<div className="panel panel-default">
	  				<div className="panel-heading" id="groupHeading">
	   					<h4 className="panel-title text-center" id="createGroupTitle">create a group</h4>
	  				</div>
		  			<div className="panel-body" id="groupPanel">
		     			<form className="form-inline">
							<div className="form-group text-center groupText" >
								<label for="groupName">name:</label><br />
								<input type="text" name="groupName" value={this.state.groupName} onChange={this.handleChange} />
		    				</div>
					
							<div className="form-group text-center groupText">
								<label for="groupDescription">description:</label><br />
								<textarea type="text" name="groupDescription" value={this.state.groupDescription} onChange={this.handleChange}/>
				    		</div>
		    			</form>
				    <button type="button" className="btn btn-primary actionButton center-block" id="createGroupButton" onClick={this.handleSubmit}>create group</button>
		  			</div>
		  		</div>
				</div>
				<div className="col-lg-4"></div>
			</div>
		)
	}
}

export default CreateGroup;