import React, { Component } from 'react';
import './dashboard.css';
import {Link} from 'react-router-dom';
import CreateGroup from './createGroup.js';
import axios from 'axios';

// Dashboard component
class Dashboard extends Component {
	constructor(){
		super();
		this.state = {
			createGroup: false,
			groupToDelete: ""
		};
		this.showForm = this.showForm.bind(this);
		this.groupToDelete = this.groupToDelete.bind(this);
	}

	// function to show the create group form
	showForm(){
		this.setState({
			createGroup: true
		});
	}

	// function to hide group form
	hideForm = () => {
		this.setState({
			createGroup: false
		});
	}

	// function to set the state to delete a group from the dashboard page
	groupToDelete (group) {
		this.setState({
			groupToDelete: group
		}, this.deleteGroupFromUsers);	
	}

	// function to delete a group from a user page
	deleteGroupFromUsers (event) {
		console.log("this.props.groups");
		console.log(this.props.groups);
		const groupIDToDelete = this.props.groups[this.state.groupToDelete]._id;
		console.log("group id to delete: " + groupIDToDelete);
		let groupsArray = this.props.groups;
		groupsArray.splice(this.state.groupToDelete, 1);
		axios.post("/auth/deleteGroup", {
			userID: this.props.userID,
			groupsArray: groupsArray
		}).then(response => {
			console.log("response from delete group from user axios request");
			console.log(response);
			if (!response.data.errmsg) {
				console.log('group deleted');
				this.props.refreshGroup(response.data.groups);
				this.deleteUserfromGroups(groupIDToDelete, this.props.userID);
			} else {
				console.log('duplicate');
			}
		});
	}

	// function to delete the user from a group
	deleteUserfromGroups (groupID, userID) {
		axios.post("group/deleteUser", {
			groupID: groupID,
			userID: userID
		}).then(response => {
			console.log("response from delete user from group axios request");
			console.log(response);
			if (!response.data.errmsg) {
				console.log('user deleted');
			} else {
				console.log('duplicate');
			}
		});
	}

// render function
render(){
	// creating the conditional component and passing states down to it
	let groupForm = null;
		if(this.state.createGroup === true) {
			groupForm = <CreateGroup hideForm={this.hideForm} userID={this.props.userID} refreshGroup={this.props.refreshGroup} createGroup={this.state.createGroup}/>
		}

return (
<div className="mainDashboard">
	<div className="row" id="navBarRow">
		<nav className="navbar navbar-inverse">
			<div className="container-fluid">
				<div className="navbar-header">	
					<a className="navbar-brand" id="logo" href="/">glimpse</a>
				</div>
				<div className="collapse navbar-collapse" id="myNavbar">
					<ul className="nav navbar-nav">
						<li><button className="btn btn-primary" id="groupButton" onClick={this.showForm}>Create a Group</button></li>
					</ul>
					<ul className="nav navbar-nav navbar-right">
						<li>
							<form className="navbar-form pull-right">
								<div className="form-group">
									<input type="text" className="form-control" placeholder="Search for a Group" />
								</div>
								<button type="submit" className="btn btn-default">Find</button>
							</form></li>
							<li><button className="btn btn-primary" id="logOutButton" onClick={this.props._logout}><Link to="/" id="logOutButton"><span className="glyphicon glyphicon-log-in"></span>  Logout</Link></button></li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
		<br />
			<div className="row" id="groupFormRow">
				<createGroupForm />
				{groupForm}
			</div>

			<br /> <br /> <br /> <br />

			<div className="container-fluid text-left">
			<div className="row-inline content" id="calendarRow">
				<div className="col-lg-12">
					<i className="inline fa fa-calendar fa-2x" aria-hidden="true"></i>
					<h1 className="inline" id="calendars">Your Calendars</h1>
				</div>
			</div>
			<div className="row content" id="peaches">
		{/*map function looping through all of the groups into their own panel*/}
			{this.props.groups.map((group, index) => {
				let route = `/group/${group._id}`;
				return(
				<div className="row" key={index}>
					<div className="panel panel-default" id="groupNameBox">
							<div className="panel-body panel-fixed" key={index.groupName}>
                <Link to={route}>
								  <h4>{group.groupName}</h4> <br />
                  <p><i>{group.groupDescription}</i></p>
                </Link>
                <button className="btn btn-primary pull-right" id="deleteButton" onClick={(group) => {this.groupToDelete(index);}}><i className="fa fa-times" id="xDelete" aria-hidden="true"></i></button>
							</div>
					</div>
        </div>);})}
			</div>
		</div>
	<br/>
</div>
)
}
}
	export default Dashboard;