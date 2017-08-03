import React, { Component } from 'react';
// import './index.css';
import { Route, Link} from 'react-router-dom';
import axios from 'axios';

class CreateEvent extends Component {
	constructor() {
		super();
		this.state = {
			title: "",
			start: "",
			end: "",
			desc: ""
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
				event: {
					title: this.state.title,
					start: this.state.start,
					end: this.state.end,
					desc: this.state.desc
				},
				id: this.props.currentGroup
			})
			.then(response => {
				console.log("response after handle submit");
				console.log(response);
				// console.log("response id: " + response.data._id);
				if (!response.data.errmsg) {
					console.log('event added');
					this.props.hideEventForm();
					this.props.forceUpdateHandler();
				} else {
					console.log('duplicate');
				}
			});
	}
	render(){
		return(
			<div className="panel panel-default">
	  		<div className="panel-heading">
	   			<h4 className="panel-title">add an event</h4>
	  		</div>
		  	<div className="panel-body">
		     	<form>
						<div className="form-group">
							<label for="title">event name:</label>
							<input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
		    		</div>
					
						<div className="form-group">
							<label for="start">event begins (July 22, 2017 5:00pm):</label>
							<input type="text" name="start" value={this.state.start} onChange={this.handleChange} />
		    		</div>

		    		<div className="form-group">
							<label for="end">end of event (July 22, 2017 9:00pm):</label>
							<input type="text" name="end" value={this.state.end} onChange={this.handleChange} />
		    		</div>

		    		<div className="form-group">
							<label for="desc">description:</label>
							<textarea type="text" name="desc" value={this.state.desc} onChange={this.handleChange}/>
				    </div>
		    	</form>
				    <button type="button" className="btn btn-primary" id="createEventButton" onClick={this.handleSubmit}>create event</button>
		  	</div>
			</div>
		)
	}
}

export default CreateEvent;