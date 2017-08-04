import React, { Component } from 'react';
import './group.css';
import { Route, Link } from 'react-router-dom';
import Calendar from './calendar';
import CreateEvent from './createEvent';
import helpers from '../utils/helpers';
import AddUser from './addUser';

const divStyle = {
  height: 600
}




class Group extends Component {
  constructor(props){
    super(props);
    this.state = {
      creatEvent: false,
      addUser: false,
      events: [],
      users: []
    }
    this.showEventForm = this.showEventForm.bind(this);
    this.getEvents = this.getEvents.bind(this);
    this.showAddUserForm = this.showAddUserForm.bind(this);
    this.hideAddUserForm = this.hideAddUserForm.bind(this);
    this.refreshUsers = this.refreshUsers.bind(this);

  }
  
  componentDidMount(){
      console.log("Made it to getEvents");
    helpers.getEvents(this.props.match.params.id)
      .then(response => {
        console.log("made it to response");
        console.log(response.data);
        
        let eventsArray = response.data.events;

        let newStateEventsArray =[];

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

          newStateEventsArray.push(newEventObject)

        // debugger
        console.log(newEventObject.end instanceof Date)
        })



        let usersArray = response.data.users;
        console.log("usserArray")
        console.log(usersArray)
        console.log(eventsArray)
        this.setState({
          events: newStateEventsArray,
          users: usersArray
        })

      })
  }

  showEventForm(){
    this.setState({
      createEvent: true
    });
  }

  hideEventForm = () => {
    this.setState({
      createEvent: false
    });
  }

  showAddUserForm(){
    this.setState({
      addUser: true
    });
  }

  hideAddUserForm = () => {
    this.setState({
      addUser: false
    });
  }

  refreshUsers (groupResponse) {
    console.log(groupResponse);
    this.setState({
      users: groupResponse
    });
    console.log("this.state.users from refreshUsers");
    console.log(this.state.users);
  }


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

        // debugger
        console.log(newEventObject.end instanceof Date)
        })

        console.log("newStateArray")
        console.log(newStateArray)
        console.log(eventsArray)
        this.setState({
          events: newStateArray
        })

      })



  } //ends getEvents

	render(){
    // console.log(this.props.match.params.id);
    let eventForm = null;
    if(this.state.createEvent == true) {
      eventForm = <CreateEvent hideEventForm={this.hideEventForm} userID={this.props.userID} currentGroup={this.props.match.params.id} refreshEvent={this.getEvents}/>
    }
    let addUserForm = null;
    if(this.state.addUser == true) {
      addUserForm = <AddUser hideAddUserForm={this.hideAddUserForm} userID={this.props.userID} currentGroup={this.props.match.params.id} refreshUsers={this.refreshUsers} />
    }
		return(
      <div className="main" id="mainCal">
        <div className="row" id="navBarRow">
          <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" id="logo" href="#dashboard">glimpse</a>
              </div>
              <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav">
                  
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  <li>
                    <form className="navbar-form pull-right">
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Search for a Group" />
                      </div>
                      <button type="submit" className="btn btn-default">Find</button>
                    </form>
                  </li>
                  <li><button className="btn btn-primary" id="logOutButton" onClick={this.props._logout}><span className="glyphicon glyphicon-log-in"></span>  Logout</button></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <br />

        <div className="row">
          <createEventForm creatEvent={this.state.creatEvent} />
           {eventForm}
        </div>
          <createAddUserForm addUser={this.state.addUser} />
           {addUserForm}
        

        <div className="row">
          <div className="container" id="calContainer">    
            <div className="container-fluid text-center">    
              <div className="row content">
                <div className="col-sm-2 sidenav">
                  <button type="button" className="btn btn-hero" onClick={this.showEventForm}>add a user</button>
                    {this.state.users.map((user, index) => {
                    return(
                      <p key={index}>{user.firstName}</p>
                    )
                  })}
                </div>
                <div className="col-lg-8 text-left" id="calBackground"> 
                  <div className="calendar" style={divStyle}>

                    <Calendar currentGroup={this.props.match.params.id} events={this.state.events}/>

                  </div>
                </div>
                <div className="col-sm-2 sidenav">
                  <button type="button" className="btn btn-hero" onClick={this.showAddUserForm}>add a new user</button>
                  <button type="button" className="btn btn-hero" onClick={this.showEventForm}>add a new event</button>
                  

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