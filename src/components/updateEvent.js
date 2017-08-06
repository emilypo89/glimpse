import React, { Component } from 'react';
import './createEvent_addUser.css';
import axios from 'axios';

// update event conditional component
class UpdateEvent extends Component {
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

	// when the component mounts is sets the state to the event the user wants to update
	componentDidMount () {
		this.setState({
			title: this.props.events[this.props.currentIndex].title,
			start: this.props.events[this.props.currentIndex].start,
			end: this.props.events[this.props.currentIndex].end,
			desc: this.props.events[this.props.currentIndex].desc
		});
	}

	// function to set the state as the user types
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	// updates the event on submit 
	// in response hides update event form and refreshes events
	handleSubmit(event) {
		event.preventDefault();
		let updatedArray = this.props.events;
		updatedArray[this.props.currentIndex] = {
					title: this.state.title,
					start: this.state.start,
					end: this.state.end,
					desc: this.state.desc
		}
		console.log("updated array");
		console.log(updatedArray);
		axios
			.post('/group/updateEvent', {
				groupID: this.props.currentGroup,
				updatedArray: updatedArray
			})
			.then(response => {
				console.log("response after handle submit");
				console.log(response);
				if (!response.data.errmsg) {
					console.log('event added');
					this.props.hideUpdateEventForm();
					this.props.refreshEvent();
				} else {
					console.log('duplicate');
				}
			});
	}
	render(){
		return(
			<div className="row" id="createEventRow">
				<div className="col-lg-1"></div>
				<div className="col-lg-10">
					<div className="panel panel-default">
	  				<div className="panel-heading" id="createEventHeading">
	   					<h4 className="panel-title text-center" id="createEventTitle">update an event</h4>
	  				</div>
		  			<div className="panel-body" id="createEventPanel">
		     			<form className="form-inline text-center">
							<div className="form-group text-center createEventText">
								<label htmlFor="title">event name:</label> <br />
								<input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
		    				</div>
					
							<div className="form-group text-center createEventText">
								<label htmlFor="start">event begins (July 22, 2017 5:00 pm):</label> <br />
								<input type="text" name="start" value={this.state.start} onChange={this.handleChange} />
			    			</div>

			    			<div className="form-group text-center createEventText">
								<label htmlFor="end">end of event (July 22, 2017 9:00 pm):</label> <br />
								<input type="text" name="end" value={this.state.end} onChange={this.handleChange} />
			    			</div>

			    			<div className="form-group text-center createEventText">
								<label htmlFor="desc">description:</label> <br />
								<input type="text" name="desc" value={this.state.desc} onChange={this.handleChange}/>
					    	</div>
		    			</form>
				    <button type="button" className="btn btn btn-primary actionButton center-block" id="updateEventButton" onClick={this.handleSubmit}>update event</button>
		  	</div>
			</div>
			</div>
			<div className="col-lg-1"></div>
			</div>
		)
	}
}

export default UpdateEvent;