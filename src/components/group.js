import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './group.css';
import Calendar from './calendar';
import CreateEvent from './createEvent';
import helpers from '../utils/helpers';
import AddUser from './addUser';
import UpdateEvent from './updateEvent';

// style so that the calendar fits on the group page
const divStyle = {
  height: 600
}

// group component
class Group extends Component {
  constructor(props){
    super(props);
    this.state = {
      creatEvent: false,
      addUser: false,
      updateEvent: false,
      events: [],
      users: [],
      currentIndex: ""
    }
    this.showEventForm = this.showEventForm.bind(this);
    this.getEvents = this.getEvents.bind(this);
    this.showAddUserForm = this.showAddUserForm.bind(this);
    this.hideAddUserForm = this.hideAddUserForm.bind(this);
    this.refreshUsers = this.refreshUsers.bind(this);
    this.showUpdateEventForm = this.showUpdateEventForm.bind(this);
    this.hideUpdateEventForm = this.hideUpdateEventForm.bind(this);

  }
  
  // on componenet did mount helper axios request to pull the event and set the state as the group's events on page load
  componentDidMount(){
      console.log("Made it to getEvents");
    helpers.getEvents(this.props.match.params.id)
      .then(response => {
        console.log("made it to response");
        console.log(response.data);
        
        let eventsArray = response.data.events;

        let newStateEventsArray =[];

        eventsArray.forEach((event, index) => {
          console.log("index: " + index);
          console.log("the Event");
          console.log(event);
          var endDate = new Date(event.end);
          var startDate = new Date(event.start);
          var newEventObject = {
            end: endDate,
            start: startDate,
            title: event.title,
            desc: event.desc
          }
          console.log("New Object");
          console.log(newEventObject);
          newStateEventsArray.push(newEventObject);
          console.log(newEventObject.end instanceof Date);
        })
        let usersArray = response.data.users;
        console.log("usserArray")
        console.log(usersArray)
        console.log(eventsArray)
        this.setState({
          events: newStateEventsArray,
          users: usersArray
        });
      });
  }

  // function to show the create event form
  showEventForm(){
    this.setState({
      createEvent: true
    });
  }

  // function to hide the create event form
  hideEventForm = () => {
    this.setState({
      createEvent: false
    });
  }

  // function to show the add user form
  showAddUserForm(){
    this.setState({
      addUser: true
    });
  }

  // function to hide the add user form
  hideAddUserForm = () => {
    this.setState({
      addUser: false
    });
  }

  // function to show the update event form
  showUpdateEventForm(){
    this.setState({
      updateEvent: true
    });
  }

  // function to hide the update event form
  hideUpdateEventForm = () => {
    this.setState({
      updateEvent: false
    });
  }

  // function to update the users so that the page will re render when a user is added to the group
  refreshUsers (groupResponse) {
    console.log(groupResponse);
    this.setState({
      users: groupResponse
    });
    console.log("this.state.users from refreshUsers");
    console.log(this.state.users);
  }

  // function to pull events onto the calendar based on the current group to re render
  getEvents() {
    console.log("Made it to getEvents");
    helpers.getEvents(this.props.match.params.id)
      .then(response => {
        console.log("made it to response");
        console.log(response.data);
        
        let eventsArray = response.data.events;

        let newStateArray =[];

        eventsArray.forEach((event, index) => {
          console.log("index: " + index)
          console.log("the Event")
          console.log(event)
          var endDate = new Date(event.end)
          var startDate = new Date(event.start)
          var newEventObject = {
            end: endDate,
            start: startDate,
            title: event.title,
            desc: event.desc
          }

          console.log("New Object")
          console.log(newEventObject)

          newStateArray.push(newEventObject)
          console.log(newEventObject.end instanceof Date)
        })
          console.log("newStateArray")
          console.log(newStateArray)
          console.log(eventsArray)
          this.setState({
            events: newStateArray
          });
      });
  } //ends getEvents

  // function to change the state of the current event index
  currentIndex (index) {
    this.setState({
      currentIndex: index
    });
  }

// render function
	render(){
    // console.log(this.props.match.params.id);
    // defining conditional componet for creating an event
    let eventForm = null;
    if(this.state.createEvent === true) {
      eventForm = <CreateEvent hideEventForm={this.hideEventForm} userID={this.props.userID} currentGroup={this.props.match.params.id} refreshEvent={this.getEvents} creatEvent={this.state.creatEvent} />
    }
    // defining conditional componet for adding a user to a group
    let addUserForm = null;
    if(this.state.addUser === true) {
      addUserForm = <AddUser hideAddUserForm={this.hideAddUserForm} userID={this.props.userID} currentGroup={this.props.match.params.id} refreshUsers={this.refreshUsers} addUser={this.state.addUser} />
    }
    // defining conditional componet for updating an event
    let updateEventForm = null;
    if(this.state.updateEvent === true) {
      updateEventForm = <UpdateEvent currentIndex={this.state.currentIndex} hideUpdateEventForm={this.hideUpdateEventForm} userID={this.props.userID} currentGroup={this.props.match.params.id} refreshEvent={this.getEvents} events={this.state.events} updateEvent={this.state.updateEvent} />
    }

		return(
      <div className="main" id="mainCal">
        <div className="row" id="navBarRow">
          <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" id="logo" href="/">glimpse</a>
              </div>
              <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav">
                  
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  <li><button className="btn btn-primary" id="logOutButton" onClick={this.props._logout}><Link to="/" id="logOutButton"><span className="glyphicon glyphicon-log-in"></span>  Logout</Link></button></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <br />

        <div className="row">
          <createEventForm />
           {eventForm}
        </div>
          <createAddUserForm />
           {addUserForm}
          <createUpdateEventForm />
           {updateEventForm} 
        

        <div className="row">
          <div className="container" id="calContainer">    
            <div className="container-fluid text-center">    
              <div className="row content">
                <div className="col-sm-2 sidenav">
                  <button type="button" className="btn btn-hero" onClick={this.showAddUserForm}>add a user</button>
                    {this.state.users.map((user, index) => {
                    return(
                      <p className="sideNavP" key={index}>{user.firstName}</p>
                    )
                  })}
                </div>
                <div className="col-lg-8 text-left" id="calBackground"> 
                  <div className="calendar" style={divStyle}>

                    <Calendar currentGroup={this.props.match.params.id} events={this.state.events}/>

                  </div>
                </div>
                <div className="col-sm-2 sidenav">
                  <button type="button" className="btn btn-hero" onClick={this.showEventForm}>add a new event</button>
                  {this.state.events.map((event, index) => {
                  
                  return(
                     <a key={index} onClick={(event) => {this.currentIndex(index); this.showUpdateEventForm();}}>
                        <p className="sideNavP" id="eventUpdate" key={index}>
                          {event.title}
                        </p>
                    </a>);})}
                </div>
              </div>
            </div>
          </div>
        </div>
		  </div>
    )
	}
		
}

export default Group;