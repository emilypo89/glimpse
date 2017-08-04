import React, { Component } from 'react';
// import './index.css';
import { Route, Link} from 'react-router-dom';
import axios from 'axios';

class AddUser extends Component {
	constructor() {
		super();
		this.state = {
			email: ""
		}
		this.handleChange = this.handleChange.bind(this)	
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	handleSubmit(event) {
		event.preventDefault()
		axios
			.post('/group/event', {
				email: this.state.email,
				id: this.props.currentGroup
			})
			.then(response => {
				console.log("response after handle submit");
				console.log(response);
				// console.log("response id: " + response.data._id);
				if (!response.data.errmsg) {
					console.log('event added');
					this.props.hideAddUserForm();
				} else {
					console.log('duplicate');
				}
			});
	}
	render(){
		return(
			<div className="panel panel-default">
	  		<div className="panel-heading">
	   			<h4 className="panel-title">add a user</h4>
	  		</div>
		  	<div className="panel-body">
		     	<form>
						<div className="form-group">
							<label for="email">new user's email:</label>
							<input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
		    		</div>
		    	</form>
				    <button type="button" className="btn btn-primary" id="createEventButton" onClick={this.handleSubmit}>create event</button>
		  	</div>
			</div>
		)
	}
}

export default AddUser;