import React, { Component } from 'react';
import './dashboard.css';
import { Route, Link} from 'react-router-dom';
import CreateGroup from './createGroup.js';
import axios from 'axios';
// import Calendar from './containers/calendar.js';
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

	showForm(){
		this.setState({
			createGroup: true
		});
	}

	hideForm = () => {
		this.setState({
			createGroup: false
		});
	}

	groupToDelete (group) {
		this.setState({
			groupToDelete: group
		}, this.deleteGroupFromUsers);	
	}



	deleteGroupFromUsers (event) {
		// event.preventDefault();
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



render(){
	let groupForm = null;
		if(this.state.createGroup == true) {
			groupForm = <CreateGroup hideForm={this.hideForm} userID={this.props.userID} refreshGroup={this.props.refreshGroup}/>
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
					<createGroupForm createGroup={this.state.createGroup}/>
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
				{this.props.groups.map((group, index) => {
					let route = `/group/${group._id}`;
					return(
					<div className="row">
						<div className="panel panel-default" id="groupNameBox">
							<Link to={route}>
								<div className="panel-body panel-fixed" key={index}>
									<p><h4>{group.groupName}</h4> <br />
                  <i>{group.groupDescription}</i></p>
								</div>
							</Link>
							<button onClick={(group) => {this.groupToDelete(index);}}>delete group</button>
						</div>
          </div>);})}
				</div>
			</div>

	<br/>

		
	
		

	
	

	{/*<div className="row" id="footerDashboard">
            <p id="footerPDashboard">Created with love by: <a href="http://www.github.com/erinlevine" target="_blank">Erin</a>, <a href="http://www.github.com/njedic" target="_blank">Nikki</a>, <a href="http://www.github.com/emilypo89" target="_blank">Emily</a>, and <a href="http://www.github.com/adamk1230" target="_blank" >Adam</a></p>
    </div>*/}
	
	
	
	
</div>
)
}
}
	export default Dashboard;